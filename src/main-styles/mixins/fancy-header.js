const fancyHeader = ({ height, color, bgColor }) => {

	return `
		display: flex;
		flex-direction: row;
		position: relative;
		color: ${color};

		& :first-child {
			width: 100%;
			border-bottom-right-radius: calc(${height}/2);
			background-color: ${bgColor};
		}

		&::after {
			content: '';
			border-top: calc((3/4)*${height}) solid ${bgColor};
			border-right: calc(${height}/2) solid transparent;
			position: relative;
			right: calc((1/16)*${height});
		}
	`;
};
export default fancyHeader;