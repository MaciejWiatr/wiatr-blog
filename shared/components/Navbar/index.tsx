import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Navbar = () => (
	<nav className="flex justify-between text-xl">
		<Link href="/" passHref>
			<a data-cy="home-link" className="font-medium">
				Maciej Wiatr
			</a>
		</Link>
		<ul className="flex space-x-4">
			<li>
				<Link href="https://linkedin.com/in/maciej-wiatr" passHref>
					<a
						data-cy="linkedin-link"
						className="text-gray-400 hover:text-gray-600"
					>
						<FiLinkedin />
					</a>
				</Link>
			</li>
			<li>
				<Link href="https://github.com/MaciejWiatr" passHref>
					<a
						data-cy="github-link"
						className="text-gray-400 hover:text-gray-600"
					>
						<FiGithub />
					</a>
				</Link>
			</li>
			<li>
				<Link href="https://twitter.com/maciej_wiatr" passHref>
					<a
						data-cy="twitter-link"
						className="text-gray-400 hover:text-gray-600"
					>
						<FiTwitter />
					</a>
				</Link>
			</li>
		</ul>
	</nav>
);

export default Navbar;
