import Image from "next/image";
import RickGIF from "@shared/assets/rick.gif";

const Rick = () => {
	return (
		<div
			data-cy="rickroll"
			className="relative flex justify-center grayscale"
		>
			<Image
				src={RickGIF}
				width={114}
				height={122}
				alt="rickroll"
				loading="lazy"
				quality={10}
			></Image>
		</div>
	);
};

export default Rick;
