import { reactionType } from "./../types/reaction.type";
import create from "zustand";
import { persist } from "zustand/middleware";

interface IReactionStore {
	reactions: {
		[articleSlug: string]: reactionType;
	};
	addReaction: (articleSlug: string, reaction: reactionType) => void;
	getReaction: (articleSlug: string) => string;
}

const useReactionStore = create<IReactionStore>(
	persist(
		(set, get) => ({
			reactions: {},
			addReaction(articleSlug, reaction) {
				set((state) => ({
					...state,
					reactions: {
						...state.reactions,
						[articleSlug]: reaction,
					},
				}));
			},
			getReaction(articleSlug: string) {
				return get().reactions[articleSlug];
			},
		}),
		{
			name: "reactionStore",
		}
	)
);

export default useReactionStore;
