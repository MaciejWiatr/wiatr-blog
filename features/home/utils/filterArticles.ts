const filterArticlesByTagName = (articles, filter) => {
	return articles.filter((article) =>
		article.tags.some((tag) => tag.name.includes(filter))
	);
};

export default filterArticlesByTagName;
