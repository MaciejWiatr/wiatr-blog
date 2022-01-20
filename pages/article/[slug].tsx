import { gql } from "@apollo/client";
import { ArticlePage } from "@features/article";
import client from "@shared/lib/apollo-client";

export default ArticlePage;

export async function getStaticPaths() {
	const { data } = await client.query({
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

	let { data } = await client.query({
		query: gql`
			query GetArticle {
				article(where: { slug: "${slug}" }) {
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
