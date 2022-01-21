import isEmail from "validator/lib/isEmail";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";

const handler = nc<NextApiRequest, NextApiResponse>();
const prisma = new PrismaClient();

handler.post(async (req, res) => {
	const { email } = req.body;

	if (!isEmail(email)) {
		res.status(400).json({
			message: "Email is not valid",
		});
		return;
	}

	await prisma.email.create({ data: { email } });
	res.json({ message: "Email added to newsletter" });
});

export default handler;
