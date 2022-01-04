import { Header } from "@features/home";
import HomeLayout from "@shared/layouts/HomeLayout";
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

export default function Home() {
	return (
		<HomeLayout>
			<Header />
			<section>
				<h2 className="font-semibold mb-6">
					Wyszukaj artykuły po tagach
				</h2>
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
					<article className="col-span-1   relative overflow-hidden">
						<Image
							width={300}
							height={400}
							layout="responsive"
							className="object-cover rounded-xl overflow-hidden"
							src={"https://placeimg.com/300/480/arch"}
						></Image>
						<div className="mt-2 flex flex-col">
							<p className="text-lg text-gray-500">
								19 Lipca - 5min
							</p>
							<h3 className="text-2xl font-semibold h-12 hover:underline ">
								<Link href="/article/test">
									<a>To jest testowy artykuł </a>
								</Link>
							</h3>
						</div>
					</article>
				</section>
			</section>
			<section className="pt-[40vh] pb-10 text-gray-400 text-center">
				Wow, ale fajnie że tutaj dotarłeś! 🎉
			</section>
			<footer className="border-t border-gray-600 p-8 flex flex-wrap">
				<div className="w-1/2">
					<h2 className="text-xl">Może zostaniesz na dłużej?</h2>
					<p className="text-gray-400 max-w-md text-sm">
						Zapisz się do mojego newslettera aby regularnie
						otrzymywać informacje o nowych postach
					</p>
					<form className="mt-4 space-x-2">
						<input
							placeholder="Twój adres email"
							className="bg-transparent border border-gray-400 rounded p-2 h-12"
						/>
						<button className="bg-white text-gray-800 h-12 rounded p-2 pl-4 pr-4">
							<span className="font-medium ">Dołącz</span> 💙
						</button>
					</form>
				</div>
				<div className="w-1/2 text-right">
					<h2 className="text-xl">Kontakt</h2>
					<span className="text-gray-400 max-w-md text-sm">
						email:{" "}
						<span className="font-semibold">
							maciej.wiatr00@gmail.com
						</span>
					</span>
				</div>
			</footer>
		</HomeLayout>
	);
}
