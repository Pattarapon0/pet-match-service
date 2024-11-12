import { PrismaClient } from "@prisma/client";
import amqp from "amqplib/callback_api.js";

const prisma = new PrismaClient();

export const getMatchRequestDetail = async (req, res) => {
  try {
    console.log(req.body);
    const match = await prisma.match.findMany({
      where: {
        OR: [
          { matchUserId1: req.body.senderUserId },
          { matchUserId2: req.body.senderUserId }
        ],
        matchStatus: "MATCHED" // This will be combined with the OR conditions
      },
      select: {
        matchId: true,
        matchPetId1: true,
        matchPetName1: true,
        matchUserId1: true,
        matchPetId2: true,
        matchPetName2: true,
        matchUserId2: true
      }
    });
    match.forEach((match) => {
      if (match.matchUserId1 === req.body.senderUserId) {
        match.matchPetId1 = [match.matchPetId2, match.matchPetId2 = match.matchPetId1][0];
        match.matchPetName1 = [match.matchPetName2, match.matchPetName2 = match.matchPetName1][0];
        match.matchUserId1 = [match.matchUserId2, match.matchUserId2 = match.matchUserId1][0];
      }
    })
    if (match.length === 0) {
      console.error(`[${new Date()}] getMatchRequestDetail: no matches found`);
      return res.status(404).send({ message: "No matches found for the given petId" });
    }
    console.log(JSON.stringify(match));
    console.log(`[${new Date()}] getMatchRequestDetail: userId = ${req.body.senderUserId} success`);
    res.status(200).send(JSON.stringify(match));
  } catch (error) {
    console.error(`[${new Date()}] getMatchRequestDetail: ${error}`);
    res.status(500).send(error);
  }
}

export const sendMatchRequest = async (req, res) => {
  amqp.connect(`amqp://${process.env.RABBITMQ_URI}`, function (error0, connection) {
    if (error0) {
      console.error(`[${new Date()}] getMatchRequestDetail: userId = ${req.body.senderUserId} ${error0}`);
      res.status(500).json({ error: 'Failed to connect to RabbitMQ' });
      return;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        res.status(500).json({ error: 'Failed to create channel' });
        return;
      }

      const queue = 'match';
      const msg = req.body;
      console.log(msg);
      try {
        // Check if the channel is open
        // Send the message to the queue
        const isSent = channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
          persistent: true
        });

        if (isSent) {
          res.status(200).json({ message: 'Match successfully sent to queue' });
        } else {
          throw new Error('Message could not be sent to queue');
        }

      } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message to queue' });
      } finally {
        // Close the channel and connection after a short delay
        setTimeout(() => {
          if (channel && channel.close) {
            channel.close();  // Close the channel
          }
          if (connection && connection.close) {
            connection.close();  // Close the connection
          }
        }, 500); // Reduced delay to 500ms
      }
    });
  });
}