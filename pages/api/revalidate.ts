import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { RevalidationToken } = req.headers;
	const { data } = req.body;
	if (RevalidationToken !== process.env.REVALIDATION_TOKEN) {
		return res.status(401).json({ message: "Invalid token" });
	}

	try {
		await res.unstable_revalidate(`/article/${data.slug}`);
		return res.json({ revalidated: true });
	} catch (err) {
		return res.status(500).send("Error revalidating");
	}
}
