import HomeLayout from "@features/home/layouts/HomeLayout";
import { Article, Tag } from "@shared/graphql/generated";
import { Header, ArticleList, Footer } from "..";
import Encouragement from "../components/Encouragement";

export default function HomePage({
	articles,
	tags,
}: {
	articles: Article[];
	tags: Tag[];
}) {
	return (
		<HomeLayout>
			<Header />
			<ArticleList articles={articles} tags={tags} />
			<Encouragement />
			<Footer disableRick={false} />
		</HomeLayout>
	);
}
