import React from "react";
import { Resizable as Resize } from "re-resizable";

const style = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};
const enable = {
	top: false,
	right: false,
	bottom: false,
	left: false,
	topRight: false,
	bottomRight: false,
	bottomLeft: false,
	topLeft: false,
};

const Resizable = ({ pos, children, width, height }) => {
	enable[pos] = true;
	return (
		<Resize
			minWidth={230}
			defaultSize={{ width: width, height: height }}
			style={style}
			enable={enable}
		>
			{children}
		</Resize>
	);
};

export default Resizable;
