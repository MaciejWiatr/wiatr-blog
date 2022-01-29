import ScrollUpButton from "@shared/components/ScrollUpButton";
import { AppProps } from "next/app";
import Head from "next/head";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<>
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
					<SessionProvider>
						<Component {...pageProps} />
					</SessionProvider>
				</CSSTransition>
			</SwitchTransition>
			<ScrollUpButton />
		</>
	);
}

export default MyApp;
