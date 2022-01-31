import HomeLayout from "@features/home/layouts/HomeLayout";
import { Article, Tag } from "@shared/graphql/generated";
import { Header, ArticleList } from "..";
import Encouragement from "../components/Encouragement";

interface IProps {
	articles: Article[];
	tags: Tag[];
}

export default function HomePage({ articles, tags }: IProps) {
	return (
		<HomeLayout>
			<Header />
			<ArticleList articles={articles} tags={tags} />
			<Encouragement />
		</HomeLayout>
	);
}
