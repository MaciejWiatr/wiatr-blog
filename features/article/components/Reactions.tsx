import { useEffect, useState } from "react";
import createOrUpdateReaction from "../api/reaction";
import useReactionStore from "../store/useReactionStore";
import ReactionItem from "./ReactionItem";

const reactionList = [
	{
		emoji: "😍",
		name: "Super",
	},
	{
		emoji: "😕",
		name: "Lipa",
	},
	{
		emoji: "😴",
		name: "Nudy",
	},
	{
		emoji: "🤯",
		name: "Wow",
	},
];

const Reactions = ({ id }) => {
	const { getReaction, addReaction, reactions, userId } = useReactionStore();
	const [active, setActive] = useState(null);

	useEffect(() => {
		setActive(getReaction(id));
	}, [getReaction, reactions, id]);

	const changeReaction = (reaction) => {
		addReaction(id, reaction);
		createOrUpdateReaction(id, reaction, userId);
	};

	return (
		<div className="my-12 rounded-xl md:mx-24">
			<h2 className="text-lg text-center text-gray-400">
				Jak ci się podobał ten artykuł?
			</h2>
			<ul className="flex flex-wrap justify-center gap-3 mt-4">
				{reactionList.map((reaction) => (
					<ReactionItem
						setReaction={changeReaction}
						active={active === reaction.name}
						key={reaction.name}
						{...reaction}
					/>
				))}
			</ul>
		</div>
	);
};

export default Reactions;
