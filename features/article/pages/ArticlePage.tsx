import Image from "next/image";
import ArticleLayout from "../layouts/ArticleLayout";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const mockArticle = {
	data: {
		article: {
			title: "Co tam  w kinie słychać",
			tags: [
				{
					name: "TypeScript",
				},
			],
			slug: "co-tam-w-kinie-slychac",
			image: {
				url: "https://media.graphcms.com/87163A3TvePx7H3GZB0g",
			},
			content: {
				markdown:
					'# To jest tytuł kategorii\n\n> mega fajne to kox\n\n    a to nie, to juz jest zwykły tekst\n\n<iframe width="300" height="250" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="https://www.youtube.com/embed/860d8usGC0o" src="https://www.youtube.com/embed/860d8usGC0o"></iframe>\n\nokej nawet nie najgorzej się w tym pisze\n\n**zastanawiam się tylko jak dobrze będzie mi się w tym pisało na dłuższą mete**\n\n****\n\n| tabelka | tabelkowa |\n| ------- | --------- |\n| test    | testowo   |\n\n****\n',
			},
			createdAt: "2022-01-05T03:32:29.747696+00:00",
		},
	},
};

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
