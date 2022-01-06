import { gql } from "@apollo/client";
import { HomePage } from "@features/home";
import client from "@shared/lib/apollo-client";

export default HomePage;

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query GetArticlesAndTags {
				articles(orderBy: updatedAt_DESC) {
					title
					image {
						url
					}
					createdAt
					slug
					tags {
						name
					}
				}
				tags {
					name
				}
			}
		`,
	});

	return {
		props: {
			articles: data.articles,
			tags: data.tags,
		},
		revalidate: 300,
	};
}
