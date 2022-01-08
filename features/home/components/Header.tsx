import Image from "next/image";
import HeaderImg from "@shared/assets/header-img.png";

const Header = () => {
	return (
		<div className="w-full flex pt-[20vh] pb-[20vh] text-left flex-col min-h-fit relative">
			<h1 className="text-4xl font-medium mb-6 text-gray-100">
				Blog Macieja Wiatra
			</h1>
			<p className="text-gray-400 mr-[20vw] font-medium text-sm md:w-1/2">
				Hej, witaj na moim blogu. Znajdziesz tutaj różne ciekawostki z
				moich programistycznych wojaży
			</p>
			<div className="w-1/2 lg:w-2/5 aspect-square absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
				<Image
					layout="fill"
					className="object-cover"
					src={HeaderImg}
					alt="zdjęcie maciej wiatr"
					loading="lazy"
					placeholder="blur"
				></Image>
			</div>
		</div>
	);
};

export default Header;
