import amqp from "amqplib/callback_api.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

amqp.connect("amqp://localhost", (error0, connection) => {
    if (error0) {
        console.error("Connection error:", error0);
        return;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            console.error("Channel creation error:", error1);
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
                try {
                    const message = JSON.parse(msg.content.toString());
                    const { senderUserId, senderPetId, senderPetName, receiverUserId, receiverPetId, receiverPetName } = message;
                    console.log(" [x] Received %s", msg.content.toString());

                    const sendMatch = await prisma.match.findFirst({
                        where: {
                            matchPetId1: receiverPetId,
                            matchPetId2: senderPetId
                        }
                    });

                    if (!sendMatch) {
                        await prisma.match.upsert({
                            where: {
                                matchPetId1_matchPetId2: {
                                    matchPetId1: senderPetId,
                                    matchPetId2: receiverPetId
                                }
                            },
                            create: {
                                matchPetId1: senderPetId,
                                matchUserId1: senderUserId,
                                matchPetName1: senderPetName,
                                matchPetId2: receiverPetId,
                                matchUserId2: receiverUserId,
                                matchPetName2: receiverPetName
                            },
                            update: {}
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
                        });
                    }
                    channel.ack(msg);
                } catch (error) {
                    console.error("Processing error:", error);
                    channel.nack(msg, false, true);
                }
            }
        });
    });

    connection.on("error", (err) => {
        console.error("Connection error:", err);
    });

    connection.on("close", () => {
        console.log("Connection closed, attempting to reconnect...");
        setTimeout(() => {
            amqp.connect("amqp://localhost", (error0, connection) => {
                if (error0) {
                    console.error("Reconnection error:", error0);
                    return;
                }
                // Recreate the channel and reconsume messages
            });
        }, 5000); // Retry after 5 seconds
    });
});
