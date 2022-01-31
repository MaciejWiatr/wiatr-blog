import { NextSeo } from "next-seo";

const HomeMeta = () => {
	return (
		<NextSeo
			title={`Blog o programowaniu - Maciej Wiatr`}
			description={`Hej, witaj na moim blogu. Znajdziesz tutaj różne ciekawostki z moich
			programistycznych wojaży`}
			openGraph={{
				type: "website",
				url: "https://blog.maciejwiatr.pl",
				title: `Blog o programowaniu - Maciej Wiatr`,
				description: `Hej, witaj na moim blogu. Znajdziesz tutaj różne ciekawostki z moich
				programistycznych wojaży...`,
			}}
		/>
	);
};

export default HomeMeta;
