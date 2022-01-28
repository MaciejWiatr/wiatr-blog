import Navbar from "@shared/components/Navbar";

interface IProps {
	children: React.ReactNode;
}

const ArticleLayout = ({ children }: IProps) => {
	return (
		<div className="min-h-screen bg-gray-800 text-white w-full pt-[5vh] font-poppins">
			<div className="mx-[10vw]">
				<div className="max-w-5xl mx-auto">
					<Navbar />
					{children}
				</div>
			</div>
		</div>
	);
};

export default ArticleLayout;
