import { SwitchTransition, CSSTransition } from "react-transition-group";

interface IProps {
	children: React.ReactNode;
	pathname: string;
}

const PageTransition = ({ children, pathname }: IProps) => {
	return (
		<SwitchTransition mode="out-in">
			<CSSTransition key={pathname} classNames="page" timeout={300}>
				{children}
			</CSSTransition>
		</SwitchTransition>
	);
};

export default PageTransition;
