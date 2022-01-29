import axios from "axios";

interface IUploadCommentArgs {
	articleId: string;
	comment: string;
	userName: string;
	userId: string;
}

export const uploadComment = async (data: IUploadCommentArgs) => {
	const resp = await axios.post("/api/article/comment", data);
	return resp.data;
};
