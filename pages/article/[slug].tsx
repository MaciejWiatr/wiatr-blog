import { gql } from "@apollo/client";
import { ArticlePage } from "@features/article";
import { GetArticleQuery, GetSlugListQuery } from "@shared/graphql/generated";
import client from "@shared/lib/apollo-client";

export default ArticlePage;

export async function getStaticPaths() {
	const { data }: { data: GetSlugListQuery } = await client.query({
		query: gql`
			query GetSlugList {
				articles {
					slug
				}
			}
		`,
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

	let { data }: { data: GetArticleQuery } = await client.query({
		query: gql`
			query GetArticle {
				article(where: { slug: "${slug}" }) {
					id
					title
					tags {
						name
					}
					slug
					image {
						url
					}
					content {
						markdown
                        html
						text
					}
					createdAt
					views
				}
			}
		`,
	});

	return {
		revalidate: 300,
		props: { article: data.article },
	};
}
