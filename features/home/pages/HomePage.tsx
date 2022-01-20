import HomeLayout from "@features/home/layouts/HomeLayout";
import { Header, ArticleList, Footer } from "..";
import Encouragement from "../components/Encouragement";

export default function HomePage({ articles, tags }) {
	return (
		<HomeLayout>
			<Header />
			<ArticleList articles={articles} tags={tags} />
			<Encouragement />
			<Footer disableRick={false} />
		</HomeLayout>
	);
}
