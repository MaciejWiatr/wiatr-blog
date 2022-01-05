import Twemoji from "@shared/components/Twemoji";

const Footer = () => {
	return (
		<footer className="border-t border-gray-600 p-8 flex flex-wrap">
			<div className="w-full md:w-1/2">
				<h2 className="text-xl">Może zostaniesz na dłużej?</h2>
				<p className="text-gray-400 max-w-md text-sm">
					Zapisz się do mojego newslettera aby regularnie otrzymywać
					informacje o nowych postach
				</p>
				<form className="mt-4 space-x-2 flex">
					<input
						placeholder="Twój adres email"
						className="bg-transparent border border-gray-400 rounded p-2 h-12 placeholder:text-sm"
					/>
					<button className="bg-white text-gray-800 h-12 rounded p-2 pl-4 pr-4 flex items-center">
						<span className="font-medium text-sm mr-1">Dołącz</span>{" "}
						<Twemoji emoji={"❤"} />
					</button>
				</form>
			</div>
			<div className="mt-4 md:mt-0 w-full md:w-1/2 md:text-right">
				<h2 className="text-xl">Kontakt</h2>
				<span className="text-gray-400 max-w-md text-sm">
					email:{" "}
					<span className="font-semibold">
						maciej.wiatr00@gmail.com
					</span>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
