import { ArticleContext } from "@features/article/contexts/ArticleContext";
import { Article } from "@shared/graphql/generated";
import { ArticleJsonLd, NextSeo } from "next-seo";
import React, { useContext } from "react";

interface IProps {
	article: Article;
}

const ArticleMeta = () => {
	const { article } = useContext(ArticleContext);

	return (
		<>
			<NextSeo
				title={`${article.title}`}
				description={`${article.content.text.substr(0, 200)}...`}
				openGraph={{
					type: "website",
					url: "https://blog.maciejwiatr.pl",
					title: `${article.title}`,
					description: `${article.content.text.substr(0, 200)}...`,
					images: [
						{
							url: article.image.url,
							width: 1200,
							height: 630,
						},
					],
				}}
			/>
			<ArticleJsonLd
				url={`https://blog.maciejwiatr.pl/article/${article.slug}`}
				title={article.title}
				images={[article.image.url]}
				datePublished={article.createdAt}
				dateModified={article.updatedAt}
				description={article.content.text.substr(0, 200)}
				authorName={["Maciej Wiatr"]}
				publisherName="Maciej Wiatr"
				publisherLogo="https://blog.maciejwiatr.pl/favicon.png"
			/>
		</>
	);
};

export default ArticleMeta;
