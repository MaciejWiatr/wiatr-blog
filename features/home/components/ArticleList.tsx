import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import filterArticlesByTagName from "../utils/filterArticles";
import cls from "classnames";
import corgi from "@shared/assets/corgi.jpg";

const ArticleList = ({ articles, tags }) => {
	const [activeCategory, setActiveCategory] = useState("");

	const changeActiveCategory = (category) => {
		if (category === activeCategory) {
			setActiveCategory("");
			return;
		}
		setActiveCategory(category);
	};

	return (
		<section>
			<h2 className="mb-6 font-semibold">Wyszukaj artykuły po tagach</h2>
			<ul className="flex flex-wrap w-full gap-3">
				{tags.map((tag) => (
					<button
						onClick={() => changeActiveCategory(tag.name)}
						key={tag.name}
						className={cls(
							"p-2 bg-gray-700 rounded-full pl-6 pr-6 pt-3 pb-3 text-gray-300 cursor-pointer hover:ring-2 ring-white hover:bg-transparent transition-all",
							{
								"bg-gray-900 text-gray-100":
									activeCategory === tag.name,
							}
						)}
					>
						{tag.name}
					</button>
				))}
			</ul>
			<section
				id="articles"
				className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3"
			>
				{filterArticlesByTagName(articles, activeCategory).map(
					(article) => (
						<Link
							href={`/article/${article.slug}`}
							key={article.title}
							passHref
						>
							<a className="relative col-span-1 overflow-hidden cursor-pointer rounded-xl">
								<div className="relative overflow-hidden rounded-xl">
									<Image
										width={300}
										height={400}
										layout="responsive"
										className="object-cover overflow-hidden transition-all rounded-xl hover:scale-110"
										src={article.image.url}
										alt="article image"
										loading="lazy"
										placeholder="blur"
										blurDataURL={corgi.src}
										quality={50}
									></Image>
								</div>
								<div className="flex flex-col mt-2">
									<p className="text-lg text-gray-500">
										{new Date(
											article.createdAt
										).toLocaleDateString()}
									</p>
									<h3 className="text-2xl font-semibold hover:underline ">
										<p>{article.title}</p>
									</h3>
								</div>
							</a>
						</Link>
					)
				)}
			</section>
		</section>
	);
};

export default ArticleList;
