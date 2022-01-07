import Image from "next/image";
import ArticleLayout from "../layouts/ArticleLayout";

const ArticlePage = ({ article }) => {
	return (
		<ArticleLayout>
			<header className="mt-[20vh]">
				<div className="md:mx-24">
					<h1 className="text-5xl font-normal">{article.title}</h1>
					<p className="text-lg text-gray-400 mt-2 font-semibold">
						{new Date(article.createdAt).toLocaleDateString()}
					</p>
				</div>
				<div className="relative w-full h-[500px] overflow-hidden mt-12">
					<Image
						src={article.image.url}
						alt={article.title}
						layout="fill"
						className="rounded-xl object-cover"
					></Image>
				</div>
			</header>
			<article
				id="markdown"
				className="md:mx-24 pt-12 pb-12"
				dangerouslySetInnerHTML={{ __html: article.content.html }}
			>
				{/* <ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					remarkPlugins={[remarkGfm]}
				>
					{article.content.markdown}
				</ReactMarkdown> */}
			</article>
		</ArticleLayout>
	);
};

export default ArticlePage;
