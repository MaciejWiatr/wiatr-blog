import { getComments } from "@features/article/api/comment";
import React, { useMemo } from "react";
import useSWR from "swr";
import HashLoader from "react-spinners/HashLoader";

interface IProps {
	articleId: string;
}

const CommentList = ({ articleId }: IProps) => {
	const { data, error, isValidating } = useSWR(
		`/api/article/comment/${articleId}`,
		getComments
	);

	const isLoading = useMemo(
		() => data === undefined && isValidating,
		[data, isValidating]
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
			{isLoading && (
				<div className="flex items-center justify-center w-full h-full p-12">
					<HashLoader color="#f3f4f6" size={25} />
				</div>
			)}
		</div>
	);
};

export default CommentList;
