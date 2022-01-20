import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
	const prisma = new PrismaClient();

	const { articleId } = req.body;
	await prisma.views.create({ data: { articleId } });
	const viewsCount = await prisma.views.count({ where: { articleId } });
	return res.json({ views: viewsCount });
});

export default handler;
