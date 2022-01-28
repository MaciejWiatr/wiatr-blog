import axios from "axios";
import { useEffect, useState } from "react";

const useArticleViews = (id: string) => {
	const [views, setViews] = useState(0);

	useEffect(() => {
		const fetchViews = async () => {
			const res = await axios.post(`/api/article/view`, {
				articleId: id,
			});
			setViews(res.data.views);
		};
		fetchViews();
	}, [id]);

	return views;
};

export default useArticleViews;
