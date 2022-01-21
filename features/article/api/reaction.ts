import axios from "axios";

const createOrUpdateReaction = async (articleId, reactionName, userId) =>
	axios.post(`/api/article/reaction`, { articleId, reactionName, userId });

export default createOrUpdateReaction;
