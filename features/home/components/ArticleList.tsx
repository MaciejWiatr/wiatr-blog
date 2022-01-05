import Image from "next/image";
import Link from "next/link";

const mockTags = [
	"react",
	"typescript",
	"javascript",
	"css",
	"html",
	"nodejs",
	"express",
];

const ArticleList = ({ articles }) => {
	return (
		<section>
			<h2 className="font-semibold mb-6">Wyszukaj artykuły po tagach</h2>
			<ul className="flex flex-wrap gap-3 w-full">
				{mockTags.map((tag) => (
					<li
						key={tag}
						className="p-2 bg-gray-700 rounded-full pl-6 pr-6 pt-3 pb-3 text-gray-300 cursor-pointer hover:ring-2 ring-white hover:bg-transparent transition-all"
					>
						{tag}
					</li>
				))}
			</ul>
			<section
				id="articles"
				className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
			>
				{articles.map((article) => (
					<article
						key={article.title}
						className="col-span-1   relative overflow-hidden cursor-pointer rounded-xl"
					>
						<div className="overflow-hidden relative rounded-xl">
							<Image
								width={300}
								height={400}
								layout="responsive"
								className="object-cover rounded-xl overflow-hidden hover:scale-110 transition-all"
								src={article.image.url}
								alt="article image"
							></Image>
						</div>
						<div className="mt-2 flex flex-col">
							<p className="text-lg text-gray-500">
								{new Date(
									article.createdAt
								).toLocaleDateString()}
							</p>
							<h3 className="text-2xl font-semibold hover:underline ">
								<Link href={`/article/${article.slug}`}>
									<a>{article.title}</a>
								</Link>
							</h3>
						</div>
					</article>
				))}
			</section>
		</section>
	);
};

export default ArticleList;
