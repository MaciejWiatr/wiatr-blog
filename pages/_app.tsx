import ScrollUpButton from "@shared/components/ScrollUpButton";
import Head from "next/head";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }) {
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
					<Component {...pageProps} />
				</CSSTransition>
			</SwitchTransition>
			<ScrollUpButton />
		</>
	);
}

export default MyApp;
