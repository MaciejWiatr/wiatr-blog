import Twemoji from "@shared/components/Twemoji";
import { motion, useAnimation, Variants } from "framer-motion";
import cls from "classnames";

const containerVariants: Variants = {
	initial: {
		y: -7,
	},
	animateIn: (i) => ({
		rotateZ: i * 72,
		transition: {
			delay: i * 0.1,
			type: "tween",
			duration: 0.25,
		},
	}),
	animateOut: (i) => ({
		rotateZ: 0,
		transition: {
			delay: i * 0.1,
			type: "tween",
		},
	}),
	exit: { y: 0 },
};

const emojiVariants: Variants = {
	animateIn: (i) => ({
		scale: 1.25,
		y: 60,
		opacity: 1,
		transition: {
			delay: i * 0.1,
			type: "spring",
		},
	}),
	animateOut: (i) => ({
		scale: 0.5,
		y: 0,
		opacity: 0,
		transition: {
			delay: i * 0.1,
			type: "tween",
		},
	}),
};

interface IProps {
	emoji: string;
	name: string;
	active: boolean;
	setReaction: (name: string) => void;
}

const ReactionItem = ({ emoji, name, active, setReaction }: IProps) => {
	const containerControls = useAnimation();
	const emojiControls = useAnimation();

	const onClick = async () => {
		containerControls.set("initial");
		setReaction(name);
		await Promise.all([
			containerControls.start("animateIn"),
			emojiControls.start("animateIn"),
		]);
		await Promise.all([
			containerControls.start("animateOut"),
			emojiControls.start("animateOut"),
		]);
		containerControls.set("exit");
	};

	return (
		<li>
			<button
				data-cy={`reaction-${name}`}
				onClick={onClick}
				className={cls(
					"flex items-center p-4 space-x-2 transition-all bg-gray-700 rounded-full hover:bg-gray-600",
					{
						"ring-2 ring-white": active,
					}
				)}
			>
				<div className="relative flex items-center">
					<motion.div
						className="z-20 flex items-center"
						whileHover={{ scale: 1.25 }}
					>
						<Twemoji emoji={emoji} />
					</motion.div>
					{new Array(5).fill(0).map((_, i) => (
						<motion.div
							initial={{ y: 0 }}
							className="absolute top-0 h-10"
							custom={i}
							variants={containerVariants}
							animate={containerControls}
							key={`${i}-container`}
						>
							<motion.div
								initial={{ scale: 0.5, opacity: 0 }}
								className="relative"
								key={i}
								custom={i}
								animate={emojiControls}
								variants={emojiVariants}
							>
								<Twemoji emoji={emoji} />
							</motion.div>
						</motion.div>
					))}
				</div>
				<p className="text-xs md:text-sm">{name}</p>
			</button>
		</li>
	);
};

export default ReactionItem;
