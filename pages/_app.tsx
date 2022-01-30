import ScrollUpButton from "@shared/components/ScrollUpButton";
import { AppProps } from "next/app";
import Head from "next/head";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";

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
			<SwitchTransition mode="out-in">
				<CSSTransition
					key={router.pathname}
					classNames="page"
					timeout={300}
				>
					<Component {...pageProps} />
				</CSSTransition>
			</SwitchTransition>
			<ScrollUpButton />
		</SessionProvider>
	);
}

export default MyApp;
