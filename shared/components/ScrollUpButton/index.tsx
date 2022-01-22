import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import cls from "classnames";

const ScrollUpButton = () => {
	const { y: scrollY } = useWindowScroll();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, [scrollY]);

	return (
		<button
			data-cy="scroll-up-button"
			className={cls(
				"fixed bottom-0 right-0 p-2 m-6 text-gray-400 transition-all bg-gray-700 rounded-full cursor-pointer hover:ring-2 ring-white",
				{
					"opacity-0": !isVisible,
				}
			)}
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M8 7l4-4m0 0l4 4m-4-4v18"
				/>
			</svg>
		</button>
	);
};

export default ScrollUpButton;
