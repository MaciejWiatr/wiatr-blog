import Twemoji from "@shared/components/Twemoji";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="border-t border-gray-600 pt-8 pb-8 flex flex-wrap">
			<div className="w-full md:w-1/2">
				<h2 className="text-xl">Może zostaniesz na dłużej?</h2>
				<p className="text-gray-400 max-w-md md:text-sm text-xs">
					Zapisz się do mojego newslettera aby regularnie otrzymywać
					informacje o nowych postach
				</p>
				<form className="mt-4 space-x-2 flex">
					<input
						placeholder="Twój adres email"
						className="bg-transparent border border-gray-400 rounded p-2 h-12 placeholder:text-sm w-full max-w-xs"
					/>
					<button className="bg-white text-gray-800 h-12 rounded p-2 pl-4 pr-4 flex items-center">
						<span className="font-medium text-sm mr-1">Dołącz</span>{" "}
						<Twemoji emoji={"❤"} />
					</button>
				</form>
			</div>
			<div className="mt-4 md:mt-0 w-full md:w-1/2 md:text-right flex flex-col items-start md:items-end">
				<h2 className="text-xl">Kontakt</h2>
				<span className="text-gray-400 max-w-md md:text-sm text-xs">
					email:{" "}
					<span className="font-semibold">
						maciej.wiatr00@gmail.com
					</span>
				</span>
				<ul className="flex space-x-4 mt-4 md:mt-auto text-xl">
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
						<Link href="https://github.com/MaciejWiatr" passHref>
							<a className="text-gray-400 hover:text-gray-600">
								<FiGithub />
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://twitter.com/maciej_wiatr" passHref>
							<a className="text-gray-400 hover:text-gray-600">
								<FiTwitter />
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
