import Twemoji from "@shared/components/Twemoji";
import Link from "next/link";

const NotFoundPage = () => (
	<div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-gray-800">
		<Twemoji emoji={"🤡"} w={36} h={36} />
		<h1 className="mt-2 mb-2 text-3xl font-medium">404 - Nie znaleziono</h1>
		<p className="mb-4 text-sm text-center text-gray-400 w-72">
			Strona której szukasz nie istnieje, kliknij przycisk poniżej żeby
			wrócić na stronę główną
		</p>
		<Link href="/">
			<a className="p-2 pl-4 pr-4 text-green-400 border border-green-400 rounded-full hover:bg-green-400 hover:text-white">
				Powrót
			</a>
		</Link>
	</div>
);
export default NotFoundPage;
