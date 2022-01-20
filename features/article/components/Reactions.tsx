import ReactionItem from "./ReactionItem";

const reactionList = [
	{
		emoji: "😍",
		name: "Kozacki",
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

const Reactions = () => {
	return (
		<div className="my-12 rounded-xl md:mx-24">
			<h2 className="text-lg text-center text-gray-400">
				Jak ci się podobał ten artykuł?
			</h2>
			<ul className="flex flex-wrap justify-center gap-3 mt-4">
				{reactionList.map((reaction) => (
					<ReactionItem key={reaction.name} {...reaction} />
				))}
			</ul>
		</div>
	);
};

export default Reactions;
