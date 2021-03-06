import { ArticleContext } from "@features/article/contexts/ArticleContext";
import { signIn, useSession, signOut } from "next-auth/react";
import React, { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

interface IProps {
	articleId: string;
}

const Comments = () => {
	const { data: session } = useSession();
	const { article } = useContext(ArticleContext);

	const signInWithGithub = () => signIn("github");

	const signOutUser = () => signOut();

	return (
		<div className="pt-12 pb-12 md:mx-24">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl text-blue-300 md:text-4xl">
					Komentarze
				</h2>
				<div>
					{session ? (
						<h2 className="text-gray-300">
							<span className="mr-1">{session.user.name}</span>
							<button
								className="text-xs text-red-400 hover:underline"
								onClick={signOutUser}
							>
								(wyloguj)
							</button>
						</h2>
					) : (
						<button
							onClick={signInWithGithub}
							className="flex items-center gap-2 p-2 pl-4 pr-4 text-sm text-gray-300 bg-gray-900 rounded-lg md:text-md color-white"
						>
							<span>Zaloguj się</span> <BsGithub />
						</button>
					)}
				</div>
			</div>
			{session && <CommentForm articleId={article.id} />}
			<CommentList articleId={article.id} />
		</div>
	);
};

export default Comments;
