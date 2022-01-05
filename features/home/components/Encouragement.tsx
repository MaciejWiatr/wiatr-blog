import Twemoji from "@shared/components/Twemoji";

const Encouragement = () => {
	return (
		<section className="pt-[40vh] pb-10 text-gray-400 text-center flex items-center justify-center">
			<p className="mr-2">Wow, ale fajnie że tutaj dotarłeś!</p>{" "}
			<Twemoji emoji={"🎉"} />
		</section>
	);
};

export default Encouragement;
