import React, { memo } from "react";
import Image from "next/image";

interface IProps {
	emoji: string;
	w?: number;
	h?: number;
}

const Twemoji = ({ emoji, w = 20, h = 20 }: IProps) => {
	const img = emoji.codePointAt(0).toString(16);
	return (
		<Image
			src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
			height={h}
			width={w}
			alt={emoji}
		/>
	);
};

export default memo(Twemoji);
