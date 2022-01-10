import Twemoji from "@shared/components/Twemoji";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import RickGIF from "./Rick";

const Footer = () => {
	return (
		<>
			<footer className="flex flex-wrap pt-8 pb-8 border-t border-gray-600">
				<div className="w-full md:w-1/2">
					<h2 className="text-xl font-semibold">
						Może zostaniesz na dłużej?
					</h2>
					<p className="max-w-md my-2 text-xs text-gray-400 md:text-sm">
						Zapisz się do mojego newslettera aby regularnie
						otrzymywać informacje o nowych postach
					</p>
					<form className="flex mt-4 space-x-2">
						<input
							placeholder="Twój adres email"
							className="w-full h-12 max-w-xs p-2 px-4 bg-gray-700 rounded-xl placeholder:text-sm focus:outline-none focus:ring-2"
						/>
						<button className="flex items-center h-12 p-2 pl-4 pr-4 text-white transition-all border border-gray-600 hover:bg-gray-700 rounded-xl">
							<span className="mr-1 text-sm font-medium">
								Dołącz
							</span>{" "}
							<Twemoji emoji={"❤"} />
						</button>
					</form>
				</div>
				<div className="flex flex-col items-start w-full mt-4 md:mt-0 md:w-1/2 md:text-right md:items-end">
					<h2 className="text-xl font-semibold">Kontakt</h2>
					<span className="max-w-md my-2 text-xs text-gray-400 md:text-sm">
						email:{" "}
						<span className="font-semibold">
							maciej.wiatr00@gmail.com
						</span>
					</span>
					<ul className="flex mt-4 space-x-4 text-xl md:mt-auto">
						<li>
							<Link
								href="https://linkedin.com/in/maciej-wiatr"
								passHref
							>
								<a className="text-gray-400 hover:text-gray-600">
									<FiLinkedin />
								</a>
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/MaciejWiatr"
								passHref
							>
								<a className="text-gray-400 hover:text-gray-600">
									<FiGithub />
								</a>
							</Link>
						</li>
						<li>
							<Link
								href="https://twitter.com/maciej_wiatr"
								passHref
							>
								<a className="text-gray-400 hover:text-gray-600">
									<FiTwitter />
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</footer>
			<RickGIF />
		</>
	);
};

export default Footer;
