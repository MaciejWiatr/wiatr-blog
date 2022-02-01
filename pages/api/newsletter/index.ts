import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const handler = nc<NextApiRequest, NextApiResponse>();
const prisma = new PrismaClient();

const reqSchema = z.object({
	email: z.string().email(),
});

handler.post(async (req, res) => {
	const { email } = req.body;

	const validation = reqSchema.safeParse(req.body);

	if (!validation.success) {
		res.status(400).json({
			message: "Bad request",
		});
		return;
	}

	await prisma.email.create({ data: { email } });
	res.json({ message: "Email added to newsletter" });
});

export default handler;
