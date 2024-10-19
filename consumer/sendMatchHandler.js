import amqp from "amqplib/callback_api.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

amqp.connect("amqp://localhost", (error0, connection) => {
    if (error0) {
        console.log(error0);
        return;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            console.log(error1);
            return;
        }
        const queue = "match";
        channel.assertQueue(queue, {
            durable: true
        });
        // Set prefetch to 1 to ensure fair distribution of messages
        channel.prefetch(1);
        
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        
        channel.consume(queue, async (msg) => {
            if (msg !== null) {
                const message = JSON.parse(msg.content.toString());
                const { senderUserId, senderPetId,senderPetName,receiverUserId,receiverPetId,receiverPetName} = message;
                console.log(" [x] Received %s", msg.content.toString());
                const sendMatch=await prisma.match.findFirst({
                    where: {
                        matchPetId1: receiverPetId,
                        matchPetId2: senderPetId
                }}).catch((error) => {
                    console.log(error);
                    channel.nack(msg, false, true);
                })
                if (!sendMatch) {
                    const sendMatch = await prisma.match.create({
                        data: {
                            matchPetId1: senderPetId,
                            matchUserId1: senderUserId,
                            matchPetName1:senderPetName,
                            matchPetId2: receiverPetId,
                            matchUserId2: receiverUserId,
                            matchPetName2:receiverPetName
                        }
                    }).catch((error) => {
                        console.log(error);
                        channel.nack(msg, false, true);
                    });
                } else {
                    await prisma.match.update({
                      where: {
                        matchId: sendMatch.matchId,
                      },
                      data: {
                        matchStatus: "MATCHED",
                        matchDate: new Date(),
                      }
                      }
                    ).catch((error) => {
                        console.log(error);
                        channel.nack(msg, false, true);
                    });
                }
                // No need to acknowledge the message
            channel.ack(msg);
            }
        }, );
    });
});


