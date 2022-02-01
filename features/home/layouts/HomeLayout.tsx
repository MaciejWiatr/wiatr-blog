import { Footer } from "@shared/components";
import Navbar from "@shared/components/Navbar";
import HomeMeta from "../components/HomeMeta";

interface IProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: IProps) => (
	<div className="min-h-screen bg-gray-800 text-white w-full pt-[5vh] font-poppins">
		<div className="mx-[10vw]">
			<div className="max-w-5xl mx-auto">
				<Navbar />
				<HomeMeta />
				{children}
				<Footer disableRick={false} />
			</div>
		</div>
	</div>
);

export default HomeLayout;
