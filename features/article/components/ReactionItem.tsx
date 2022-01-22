import Twemoji from "@shared/components/Twemoji";
import { motion, useAnimation } from "framer-motion";
import cls from "classnames";

const ReactionItem = ({ emoji, name, active, setReaction }) => {
	const containerControls = useAnimation();
	const emojiControls = useAnimation();

	const onClick = async () => {
		containerControls.set({ y: -7 });
		setReaction(name);
		await Promise.all([
			containerControls.start((i) => ({
				rotateZ: i * 72,
				transition: {
					delay: i * 0.1,
					type: "tween",
					duration: 0.25,
				},
			})),
			emojiControls.start((i) => ({
				scale: 1.25,
				y: 60,
				opacity: 1,
				transition: {
					delay: i * 0.1,
					type: "spring",
				},
			})),
		]);
		await Promise.all([
			containerControls.start((i) => ({
				rotateZ: 0,
				transition: {
					delay: i * 0.1,
					type: "tween",
				},
			})),
			emojiControls.start((i) => ({
				scale: 0.5,
				y: 0,
				opacity: 0,
				transition: {
					delay: i * 0.1,
					type: "tween",
				},
			})),
		]);
		containerControls.set({ y: 0 });
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
							animate={containerControls}
							key={`${i}-container`}
						>
							<motion.div
								initial={{ scale: 0.5, opacity: 0 }}
								className="relative"
								key={i}
								custom={i}
								animate={emojiControls}
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
