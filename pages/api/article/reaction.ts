import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
	const prisma = new PrismaClient();
	const { articleId, reactionName, userId } = req.body;

	const exisingReaction = await prisma.reaction.findFirst({
		where: {
			articleId,
			userId,
		},
	});

	if (exisingReaction) {
		await prisma.reaction.update({
			where: {
				id: exisingReaction.id,
			},
			data: {
				reaction: reactionName,
			},
		});
		res.status(200).json({ message: "Reaction updated" });
		return;
	}

	await prisma.reaction.create({
		data: { articleId, reaction: reactionName, userId },
	});

	res.status(200).json({ message: "Reaction created" });
});

export default handler;
