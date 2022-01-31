import { Article } from "@shared/graphql/generated";
import dynamic from "next/dynamic";
import Image from "next/image";
import CommentsContainer from "../components/Comments/CommentsContainer";
const Reactions = dynamic(() => import("../components/Reactions"), {
	ssr: false,
});
import useArticleViews from "../hooks/useArticleViews";
import ArticleLayout from "../layouts/ArticleLayout";

interface IProps {
	article: Article;
}

const ArticlePage = ({ article }: IProps) => {
	const views = useArticleViews(article.id);

	return (
		<ArticleLayout article={article}>
			<header className="mt-48">
				<div className="md:mx-24">
					<h1 className="text-5xl font-normal leading-tight">
						{article.title}
					</h1>
					<p className="mt-2 text-lg font-semibold text-gray-400">
						{new Date(article.createdAt).toLocaleDateString()} -{" "}
						<span data-cy="views">{views}</span> wyświetleń
					</p>
				</div>
				<div className="relative w-full h-[500px] overflow-hidden mt-12">
					<Image
						src={article.image.url}
						alt={article.title}
						layout="fill"
						className="object-cover rounded-xl"
					></Image>
				</div>
			</header>
			<article
				id="markdown"
				className="pt-12 pb-12 md:mx-24"
				dangerouslySetInnerHTML={{ __html: article.content.html }}
			></article>
			<Reactions />
			<CommentsContainer />
		</ArticleLayout>
	);
};

export default ArticlePage;
