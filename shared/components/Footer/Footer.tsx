import dynamic from "next/dynamic";
import Link from "next/link";
import useInView from "react-cool-inview";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
const NewsletterForm = dynamic(
	() => import("@shared/components/Footer/NewsletterForm"),
	{ ssr: false }
);
import RickGIF from "../Rick";

interface IProps {
	disableRick: boolean;
}

const FooterContent = ({ disableRick }: IProps) => {
	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => {
			unobserve();
		},
	});
	return (
		<>
			<div
				ref={observe}
				className="flex flex-wrap pt-8 pb-8 border-t border-gray-600"
			>
				<section className="w-full md:w-1/2">
					<h2 className="text-xl font-semibold">
						Może zostaniesz na dłużej?
					</h2>
					<p className="max-w-md my-2 text-xs text-gray-400 md:text-sm">
						Zapisz się do mojego newslettera aby regularnie
						otrzymywać informacje o nowych postach
					</p>
					{inView && <NewsletterForm />}
				</section>
				<section className="flex flex-col items-start w-full mt-4 md:mt-0 md:w-1/2 md:text-right md:items-end">
					<h2 className="text-xl font-semibold">Kontakt</h2>
					<span className="max-w-md my-2 text-xs text-gray-400 md:text-sm">
						email:{" "}
						<span className="font-semibold">
							maciej.wiatr00@gmail.com
						</span>
					</span>
					<ul className="flex mt-4 space-x-4 text-xl md:mt-auto">
						<li>
							<Link
								href="https://linkedin.com/in/maciej-wiatr"
								passHref
							>
								<a className="text-gray-400 hover:text-gray-600">
									<FiLinkedin />
								</a>
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/MaciejWiatr"
								passHref
							>
								<a className="text-gray-400 hover:text-gray-600">
									<FiGithub />
								</a>
							</Link>
						</li>
						<li>
							<Link
								href="https://twitter.com/maciej_wiatr"
								passHref
							>
								<a className="text-gray-400 hover:text-gray-600">
									<FiTwitter />
								</a>
							</Link>
						</li>
					</ul>
				</section>
			</div>
			{!disableRick && <RickGIF />}
		</>
	);
};

export default FooterContent;
