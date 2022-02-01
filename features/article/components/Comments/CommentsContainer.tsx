import dynamic from "next/dynamic";
import React from "react";
import useInView from "react-cool-inview";
import HashLoader from "react-spinners/HashLoader";
const Comments = dynamic(() => import("./Comments"), { ssr: false });

const CommentsContainer = () => {
	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => {
			unobserve();
		},
	});

	console.log(inView);

	return (
		<div ref={observe}>
			{inView && <Comments />}
			{!inView && (
				<div className="flex flex-col items-center p-6">
					<p>Wczytuję komentarze</p>
					<HashLoader color="#f3f4f6" size={25} />
				</div>
			)}
		</div>
	);
};

export default CommentsContainer;
