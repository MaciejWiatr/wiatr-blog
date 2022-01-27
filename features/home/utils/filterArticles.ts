import { Article } from "@shared/graphql/generated";

const filterArticlesByTagName = (articles: Article[], filter: string) => {
	return articles.filter((article) =>
		article.tags.some((tag) => tag.name.includes(filter))
	);
};

export default filterArticlesByTagName;
