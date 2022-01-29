import { useSession } from "next-auth/react";
import React, { FormEvent, useRef } from "react";
import { uploadComment } from "../api/comment";

const CommentForm = ({ articleId }) => {
	const { data: session } = useSession();
	const inputRef = useRef(null);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await uploadComment({
			articleId,
			comment: inputRef.current.value,
			userId: session?.user.email,
			userName: session?.user.name,
		});
		// @ts-ignore
		event.target.reset();
	};

	return (
		<div className="flex flex-col p-6 mt-4 mb-4 border-gray-600 rounded-lg shadow-xl">
			<h2 className="mb-2 text-sm text-gray-400">Twój komentarz</h2>
			<form onSubmit={onSubmit} className="flex items-center gap-2">
				<input
					ref={inputRef}
					className="w-full p-3 text-sm bg-gray-700 rounded focus:outline-none focus:ring-2"
					placeholder="Napisz tu coś miłego :)"
				/>
				<button
					type="submit"
					className="p-3 pl-4 pr-4 text-sm bg-gray-700 rounded"
				>
					Dodaj
				</button>
			</form>
		</div>
	);
};

export default CommentForm;
