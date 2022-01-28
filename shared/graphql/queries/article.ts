import { gql } from "@apollo/client";

export const GetSlugList = gql`
	query GetSlugList {
		articles {
			slug
		}
	}
`;

export const GetArticle = gql`
	query GetArticle($slug: String!) {
		article(where: { slug: $slug }) {
			id
			title
			tags {
				name
			}
			slug
			image {
				url
			}
			content {
				markdown
				html
				text
			}
			createdAt
			views
		}
	}
`;

export const GetArticlesAndTags = gql`
	query GetArticlesAndTags {
		articles(orderBy: updatedAt_DESC) {
			id
			title
			image {
				url
			}
			createdAt
			slug
			tags {
				name
			}
		}
		tags {
			name
		}
	}
`;
