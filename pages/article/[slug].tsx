import { ArticlePage } from "@features/article";
import { GetArticleQuery, GetSlugListQuery } from "@shared/graphql/generated";
import { GetArticle, GetSlugList } from "@shared/graphql/queries/article";
import client from "@shared/lib/apollo-client";

export default ArticlePage;

export async function getStaticPaths() {
	const { data }: { data: GetSlugListQuery } = await client.query({
		query: GetSlugList,
	});

	const paths = data.articles.map((article) => ({
		params: { slug: article.slug },
	}));

	return {
		paths: paths,
		fallback: "blocking",
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;

	const { data }: { data: GetArticleQuery } = await client.query({
		query: GetArticle,
		variables: { slug },
	});

	return {
		revalidate: 300,
		props: { article: data.article },
	};
}
