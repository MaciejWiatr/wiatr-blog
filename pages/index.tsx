import { ArticleList, Footer, Header } from "@features/home";
import Twemoji from "@shared/components/Twemoji";
import HomeLayout from "@shared/layouts/HomeLayout";

export default function Home() {
	return (
		<HomeLayout>
			<Header />
			<ArticleList />
			<section className="pt-[40vh] pb-10 text-gray-400 text-center flex items-center justify-center">
				<p className="mr-2">Wow, ale fajnie że tutaj dotarłeś!</p>{" "}
				<Twemoji emoji={"🎉"} />
			</section>
			<Footer />
		</HomeLayout>
	);
}
