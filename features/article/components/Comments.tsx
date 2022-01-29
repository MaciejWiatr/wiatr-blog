import { signIn, useSession, signOut } from "next-auth/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import CommentForm from "./CommentForm";

interface IProps {
	articleId: string;
}

const Comments = ({ articleId }: IProps) => {
	const { data: session } = useSession();

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
			{session && <CommentForm articleId={articleId} />}
			<div className="flex flex-row mt-6 mb-6">
				<div className="w-full p-6 rounded-lg ">
					<div className="flex items-center justify-between">
						<p className="my-1 text-white">Maciej Wiatr</p>
					</div>
					<p className="text-xs text-gray-400 md:w-3/4 md:text-sm">
						{" "}
						Quis commodo consectetur reprehenderit sint magna ea
						consectetur consequat cupidatat Lorem cupidatat
						cupidatat.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Comments;
