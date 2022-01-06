import { gql } from "@apollo/client";
import { ArticleList, Footer, Header } from "@features/home";
import Encouragement from "@features/home/components/Encouragement";
import HomeLayout from "@shared/layouts/HomeLayout";
import client from "@shared/lib/apollo-client";

export default function Home({ articles, tags }) {
	return (
		<HomeLayout>
			<Header />
			<ArticleList articles={articles} tags={tags} />
			<Encouragement />
			<Footer />
		</HomeLayout>
	);
}

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
	};
}
