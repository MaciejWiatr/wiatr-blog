import { getComments } from "@features/article/api/comment";
import React from "react";
import useSWR from "swr";

interface IProps {
	articleId: string;
}

const CommentList = ({ articleId }: IProps) => {
	const { data, error } = useSWR(
		`/api/article/comment/${articleId}`,
		getComments
	);

	return (
		<div className="flex flex-col mt-6 mb-6">
			{error && (
				<div className="w-full p-6 text-center text-red-500">
					{error.message}
				</div>
			)}
			{data &&
				!error &&
				data.map((comment) => (
					<div key={comment.id} className="w-full p-6 py-3">
						<div className="flex items-center justify-between">
							<p className="my-1 text-white">
								{comment.userName}
							</p>
						</div>
						<p className="text-xs text-gray-400 md:w-3/4 md:text-sm">
							{" "}
							{comment.comment}
						</p>
					</div>
				))}
		</div>
	);
};

export default CommentList;
