import Image from "next/image";
import HeaderImg from "@shared/assets/header-img.png";

const Header = () => (
	<header className="w-full flex pt-[20vh] pb-[20vh] text-left flex-col min-h-fit relative">
		<h1 className="mb-6 text-4xl font-medium text-gray-100">
			Blog Macieja Wiatra
		</h1>
		<p className="text-gray-400 mr-[20vw] font-medium text-sm md:w-1/2">
			Hej, witaj na moim blogu. Znajdziesz tutaj różne ciekawostki z moich
			programistycznych wojaży
		</p>
		<div className="absolute right-0 hidden w-1/2 -translate-y-1/2 lg:w-2/5 aspect-square top-1/2 md:block">
			<Image
				layout="fill"
				className="object-cover"
				src={HeaderImg}
				alt="Maciej Wiatr na tle futurystycznego, jasnozielonego tła"
				loading="lazy"
				placeholder="blur"
			></Image>
		</div>
	</header>
);

export default Header;
