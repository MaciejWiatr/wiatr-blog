import axios from "axios";
import { reactionType } from "../types/reaction.type";

const createOrUpdateReaction = async (
	articleId: string,
	reactionName: reactionType,
	userId: string
) => axios.post(`/api/article/reaction`, { articleId, reactionName, userId });

export default createOrUpdateReaction;
