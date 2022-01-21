import { useEffect, useMemo, useState } from "react";
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

const Reactions = ({ slug }) => {
	const { getReaction, addReaction, reactions } = useReactionStore();
	const [active, setActive] = useState(null);

	useEffect(() => {
		setActive(getReaction(slug));
	}, [getReaction, reactions, slug]);

	const changeReaction = (reaction) => {
		addReaction(slug, reaction);
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
