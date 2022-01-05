import { gql } from "@apollo/client";
import { ArticleList, Footer, Header } from "@features/home";
import Encouragement from "@features/home/components/Encouragement";
import HomeLayout from "@shared/layouts/HomeLayout";
import client from "@shared/lib/apollo-client";

export default function Home({ articles }) {
	return (
		<HomeLayout>
			<Header />
			<ArticleList articles={articles} />
			<Encouragement />
			<Footer />
		</HomeLayout>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query GetCategories {
				articles(orderBy: updatedAt_DESC) {
					categories
					title
					image {
						url
					}
					createdAt
					slug
				}
			}
		`,
	});

	return {
		props: {
			articles: data.articles,
		},
	};
}
