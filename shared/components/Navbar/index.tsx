import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex text-xl">
			<Link href="/" passHref>
				<a className="font-medium">Maciej Wiatr</a>
			</Link>
		</nav>
	);
};

export default Navbar;
