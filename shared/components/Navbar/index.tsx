import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Navbar = () => {
	return (
		<nav className="flex text-xl justify-between">
			<Link href="/" passHref>
				<a className="font-medium">Maciej Wiatr</a>
			</Link>
			<ul className="flex space-x-4">
				<li>
					<Link href="https://linkedin.com/in/maciej-wiatr" passHref>
						<a className="text-gray-400 hover:text-gray-600">
							<FiLinkedin />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://github.com/MaciejWiatr" passHref>
						<a className="text-gray-400 hover:text-gray-600">
							<FiGithub />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/maciej_wiatr" passHref>
						<a className="text-gray-400 hover:text-gray-600">
							<FiTwitter />
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
