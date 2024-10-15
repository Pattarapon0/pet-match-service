import amqp from "amqplib/callback_api.js";
import { PrismaClient } from "../db/prisma/generated/client2/index.js";

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
                const { senderUserId, senderPetId, receiverPetId } = message;
                console.log(" [x] Received %s", msg.content.toString());
                console.log("Receiver Pet ID:", receiverPetId);
                
                // Process the message here
                // For example, you can add your matching logic or database operations
                const sendMatch=await prisma.sendMatch.findFirst({
                    where: {
                        senderPettId:receiverPetId,
                        receiverPetId:senderPetId,
                }}).catch((error) => {
                    console.log(error);
                    channel.nack(msg, false, true);
                })
                if (!sendMatch) {
                    const sendMatch = await prisma.sendMatch.create({
                        data: {
                            senderPettId: senderPetId,
                            senderUserId: senderUserId,
                            receiverPetId: receiverPetId,
                        }
                    }).catch((error) => {
                        console.log(error);
                        channel.nack(msg, false, true);
                    });
                    console.log("Send Match created successfully:", sendMatch);
                } else {
                    await prisma.sendMatch.delete({
                        where: {
                            sendMatchId: sendMatch.sendMatchId
                        }
                    }).catch((error) => {
                        console.log(error);
                        channel.nack(msg, false, true);
                    });
                    await prisma.match.create({
                        data: {
                            matchPetId1: senderPetId,
                            matchUserId1: senderUserId,
                            matchPetId2: receiverPetId,
                            matchUserId2: sendMatch.senderUserId
                        }
                    }).catch((error) => {
                        console.log(error);
                        channel.nack(msg, false, true);
                    });
                    console.log("Match created successfully:", sendMatch);
                }
                // No need to acknowledge the message
            channel.ack(msg);
            }
        }, );
    });
});


