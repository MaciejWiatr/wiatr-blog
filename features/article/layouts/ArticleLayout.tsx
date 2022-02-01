import { Footer } from "@shared/components";
import Navbar from "@shared/components/Navbar";
import { Article } from "@shared/graphql/generated";
import ArticleMeta from "../components/Article/ArticleMeta";
import { ArticleContext } from "../contexts/ArticleContext";

interface IProps {
	children: React.ReactNode;
	article: Article;
}

const ArticleLayout = ({ article, children }: IProps) => {
	return (
		<div className="min-h-screen bg-gray-800 text-white w-full pt-[5vh] font-poppins">
			<div className="mx-[10vw]">
				<div className="max-w-5xl mx-auto">
					<ArticleContext.Provider value={{ article }}>
						<Navbar />
						<ArticleMeta />
						{children}
						<Footer disableRick={true} />
					</ArticleContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default ArticleLayout;
