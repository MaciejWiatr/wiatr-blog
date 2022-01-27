import { gql } from "@apollo/client";
import { HomePage } from "@features/home";
import { GetArticlesAndTagsQuery } from "@shared/graphql/generated";
import client from "@shared/lib/apollo-client";

export default HomePage;

export async function getStaticProps() {
	const { data }: { data: GetArticlesAndTagsQuery } = await client.query({
		query: gql`
			query GetArticlesAndTags {
				articles(orderBy: updatedAt_DESC) {
					id
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
