import Twemoji from "@shared/components/Twemoji";
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div className="bg-gray-800 text-white w-screen h-screen flex items-center justify-center flex-col">
			<Twemoji emoji={"🤡"} w={36} h={36} />
			<h1 className="text-3xl font-medium mt-2 mb-2">
				404 - Nie znaleziono
			</h1>
			<p className="text-sm text-gray-400 w-72 text-center mb-4">
				Strona której szukasz nie istnieje, kliknij przycisk poniżej
				żeby wrócić na stronę główną
			</p>
			<Link href="/">
				<a className="p-2 border border-green-400 rounded-full pl-4 pr-4 hover:bg-green-400 hover:text-white text-green-400">
					Powrót
				</a>
			</Link>
		</div>
	);
};

export default NotFoundPage;
