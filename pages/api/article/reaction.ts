import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
	const prisma = new PrismaClient();
	const { articleId, reactionName } = req.body;

	await prisma.reactions.create({
		data: { articleId, reaction: reactionName },
	});

	res.status(200).json({ message: "Reaction created" });
});

export default handler;
