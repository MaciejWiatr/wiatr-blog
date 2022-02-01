import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const handler = nc<NextApiRequest, NextApiResponse>();
const prisma = new PrismaClient();
const reqSchema = z.object({ email: z.string().email() });

handler.get(async (req, res) => {
	const { email } = req.query;

	const validation = reqSchema.safeParse(req.query);

	if (!validation.success || typeof email !== "string") {
		res.status(400).json({
			// @ts-expect-error
			message: validation?.error?.toString(),
		});
		return;
	}
	const { id } = await prisma.email.findFirst({
		where: {
			email: email,
		},
		select: {
			id: true,
		},
	});
	await prisma.email.delete({ where: { id } });
	return res.json({ message: "Email removed from newsletter" });
});

export default handler;
