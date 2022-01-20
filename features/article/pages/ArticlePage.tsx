import { Footer } from "@features/home";
import Head from "next/head";
import Image from "next/image";
import Reactions from "../components/Reactions";
import useArticleViews from "../hooks/useArticleViews";
import ArticleLayout from "../layouts/ArticleLayout";

const ArticlePage = ({ article }) => {
	// const views = useArticleViews(article.views, article.slug);

	return (
		<ArticleLayout>
			<Head>
				<title>{article.title} - Maciej Wiatr Blog</title>
			</Head>
			<header className="mt-[20vh]">
				<div className="md:mx-24">
					<h1 className="text-5xl font-normal">{article.title}</h1>
					<p className="mt-2 text-lg font-semibold text-gray-400">
						{new Date(article.createdAt).toLocaleDateString()}
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
			>
				{/* <ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					remarkPlugins={[remarkGfm]}
				>
					{article.content.markdown}
				</ReactMarkdown> */}
			</article>
			<Reactions />
			<Footer disableRick={true} />
		</ArticleLayout>
	);
};

export default ArticlePage;
