import { Article } from "@shared/graphql/generated";
import { createContext } from "react";

interface IArticleContext {
	article: Article | null;
}

export const ArticleContext = createContext<IArticleContext>({ article: null });
