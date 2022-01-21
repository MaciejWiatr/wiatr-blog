import axios from "axios";

const addNewsletterSubscriber = async (email: string) => {
	const res = await axios.post("/api/newsletter", { email });
	const data = res.data;
	return data;
};

export default addNewsletterSubscriber;
