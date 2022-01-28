import { HomePage } from "@features/home";
import { GetArticlesAndTagsQuery } from "@shared/graphql/generated";
import { GetArticlesAndTags } from "@shared/graphql/queries/article";
import client from "@shared/lib/apollo-client";

export default HomePage;

export async function getStaticProps() {
	const { data }: { data: GetArticlesAndTagsQuery } = await client.query({
		query: GetArticlesAndTags,
	});

	return {
		props: {
			articles: data.articles,
			tags: data.tags,
		},
		revalidate: 300,
	};
}
