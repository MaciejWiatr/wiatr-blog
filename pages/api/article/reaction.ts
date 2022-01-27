import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";
import { reactionType } from "@features/article/types/reaction.type";
import { z } from "zod";

const handler = nc<NextApiRequest, NextApiResponse>();
const prisma = new PrismaClient();

interface IReqBody {
	articleId: string;
	reactionName: reactionType;
	userId: string;
}

const reqSchema = z.object({
	articleId: z.string(),
	reactionName: z.enum(["Super", "Lipa", "Nudy", "Wow"]),
	userId: z.string(),
});

handler.post(async (req, res) => {
	const { articleId, reactionName, userId }: IReqBody = req.body;

	const validation = reqSchema.safeParse(req.body);

	if (!validation.success) {
		res.status(400).json({
			message: "Bad request",
		});
		return;
	}

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
