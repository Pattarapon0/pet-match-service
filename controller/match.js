import { PrismaClient } from "../db/prisma/generated/client2/index.js";
import amqp from "amqplib/callback_api.js";

const prisma = new PrismaClient();

export const getMatchRequestDetail = async (req, res) => {
      try {
          const match = await prisma.match.findMany({
              where: { matchPetId1: req.params.petId } || { matchPetId2: req.params.petId }
          });
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
            channel.assertQueue(queue, {
                durable: true
            }).catch((error) => {
                res.status(500).json({ error: 'Failed to assert queue' });
            });
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
                persistent: true
            }).then(() => {
                res.status(200).json({ message: 'Match successfully sent to queue' });
            }).catch((error) => {
                res.status(500).json({ error: 'Failed to send message to queue' });
            });
            setTimeout(() => {
                connection.close();
            }, 500);
        });
    });
}