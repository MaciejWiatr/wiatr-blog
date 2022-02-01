import ScrollUpButton from "@shared/components/ScrollUpButton";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import PageTransition from "@shared/components/PageTransition";

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
	router,
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<title>Blog o programowaniu - Maciej Wiatr</title>
			</Head>
			<PageTransition pathname={router.pathname}>
				<Component {...pageProps} />
			</PageTransition>
			<ScrollUpButton />
		</SessionProvider>
	);
}

export default MyApp;
