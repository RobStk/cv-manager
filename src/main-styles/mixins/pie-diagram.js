export default function pieDiagram(props) {
	/* -------------------------------------------- */
	/* Configs 										*/
	/* -------------------------------------------- */
	const value = props.value;
	const rotateBase = 45;
	const rotateAdditional = (value > 0 && value <= 100) ? (360 * value / 100) : 0;

	const size = props.size || "100px";
	const color = props.color || props.theme.colors.fgPrimary;
	const bgColor = props.bgColor || props.theme.colors.bgPrimary;
	const rotate = -rotateBase + rotateAdditional;
	/* -------------------------------------------- */

	return `
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		border-radius: 50%;
		width: ${size};
		height: ${size};
		padding: calc(${props => props.size} * 0.01);
		color: ${color};
		-webkit-box-shadow: 0px 0px 0px 1px ${color};
		-moz-box-shadow: 0px 0px 0px 1px ${color};
		box-shadow: 0px 0px 0px 1px ${color};

		&::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			border-radius: inherit;
			border: calc(${size}*0.5) solid transparent;
			border-top-color: ${(value > 0) && color};
			border-right-color: ${(value > 25) && color};
			border-bottom-color: ${(value > 50) && color};
			rotate: ${rotateBase}deg;
		}

		&::after {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			border-radius: inherit;
			border: calc(${size}*0.5) solid ${bgColor};
			border-top-color: transparent;
			border-left-color: ${(value > 25) && "transparent"};
			border-bottom-color: ${(value > 50) && "transparent"};
			border-right-color: ${(value > 75) && "transparent"};
			border-top-color: ${(value > 75) && color};
			rotate: ${rotate}deg;
		}

		> * {
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1;
			background-color: ${bgColor};
			height: 80%;
			width: 80%;
			padding: 0.3em;
			border-radius: inherit;
			border: 1px solid ${color};
			font-weight: 600;
			text-align: center;
		}
	`;
}