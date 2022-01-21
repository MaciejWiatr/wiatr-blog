import { reactionType } from "./../types/reaction.type";
import create from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

interface IReactionStore {
	reactions: {
		[articleSlug: string]: reactionType;
	};
	userId: string;
	addReaction: (articleSlug: string, reaction: reactionType) => void;
	getReaction: (articleSlug: string) => string;
}

const useReactionStore = create<IReactionStore>(
	persist(
		(set, get) => ({
			userId: nanoid(),
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
