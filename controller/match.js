import { PrismaClient } from "@prisma/client";
import amqp from "amqplib/callback_api.js";

const prisma = new PrismaClient();

export const getMatchRequestDetail = async (req, res) => {
      try {
          const match = await prisma.match.findMany({
            where: {
                OR: [
                    { matchPetId1: req.params.petId },
                    { matchPetId2: req.params.petId }
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
          }});
          match.forEach((match) => {
              if (match.matchPetId1 === req.params.petId) {
                  match.matchPetId1 = match.matchPetId2;
                  match.matchPetName1 = match.matchPetName2;
                  match.matchUserId1 = match.matchUserId2;
              } 
                delete match.matchPetId2;
                delete match.matchPetName2;
                delete match.matchUserId2;
              })
          if (match.length === 0) {
              return res.status(404).send({ message: "No matches found for the given petId" });
          }
          res.status(200).send(JSON.stringify(match));
      } catch (error) {
          res.status(500).send(error);
      }
  }

export const sendMatchRequest = async (req, res) => {
    amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            res.status(500).json({ error: 'Failed to connect to RabbitMQ' });
            return;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                res.status(500).json({ error: 'Failed to create channel' });
                return;
            }
    
            const queue = 'match';
            const msg = req.body;
            
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
                }, 50000);
            }
        });
    });
}