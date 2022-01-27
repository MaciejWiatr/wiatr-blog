import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const handler = nc<NextApiRequest, NextApiResponse>();
const prisma = new PrismaClient();
const reqSchema = z.object({ articleId: z.string() });

handler.post(async (req, res) => {
	const { articleId } = req.body;

	const validation = reqSchema.safeParse(req.body);

	if (!validation.success) {
		res.status(400).json({
			message: "Bad request",
		});
		return;
	}

	await prisma.views.create({ data: { articleId } });
	const viewsCount = await prisma.views.count({ where: { articleId } });
	return res.json({ views: viewsCount });
});

export default handler;
