import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
	const prisma = new PrismaClient();

	const { email } = req.body;

	await prisma.email.create({ data: { email } });
	res.json({ message: "Email added to newsletter" });
});

export default handler;
