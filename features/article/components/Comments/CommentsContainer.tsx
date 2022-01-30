import dynamic from "next/dynamic";
import React from "react";
import useInView from "react-cool-inview";
const Comments = dynamic(() => import("./Comments"), { ssr: false });

const CommentsContainer = ({ articleId }: { articleId: string }) => {
	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => {
			unobserve();
		},
	});

	return (
		<div ref={observe}>{inView && <Comments articleId={articleId} />}</div>
	);
};

export default CommentsContainer;
