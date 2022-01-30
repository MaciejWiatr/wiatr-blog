import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const handler = nc<NextApiRequest, NextApiResponse>({ attachParams: true });
const prisma = new PrismaClient();
const postReqSchema = z.object({
	articleId: z.string(),
	comment: z.string(),
	userId: z.string(),
	userName: z.string(),
});

handler.post(async (req, res) => {
	const { articleId, comment, userName, userId } = req.body;

	const validation = postReqSchema.safeParse(req.body);

	if (!validation.success) {
		res.status(400).json({
			message: "Bad request",
		});
		return;
	}

	await prisma.comment.create({
		data: {
			articleId,
			comment,
			userId,
			userName,
		},
	});
	return res.json({ message: "Comment created" });
});

export default handler;
