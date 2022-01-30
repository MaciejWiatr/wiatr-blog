import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const handler = nc<NextApiRequest, NextApiResponse>({ attachParams: true });
const prisma = new PrismaClient();

const getReqSchema = z.object({
	articleId: z.string(),
});

handler.get(async (req, res) => {
	const { articleId } = req.query;

	const validation = getReqSchema.safeParse(req.query);

	if (!validation.success || typeof articleId !== "string") {
		res.status(400).json({
			message: "Bad request",
		});
		return;
	}

	const comments = await prisma.comment.findMany({
		where: { articleId },
		orderBy: { created: "desc" },
	});
	return res.json(comments);
});

export default handler;
