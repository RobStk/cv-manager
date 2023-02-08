export default function barDiagram(props) {
	/* -------------------------------------------- */
	/* Configs 										*/
	/* -------------------------------------------- */
	const value = (props.value > 0 && props.value <= 100) ? props.value : 0;
	const height = props.height || "8px";
	const color = props.color || props.theme.colors.fgPrimary;
	const bgColor = props.bgColor || props.theme.colors.bgPrimary;
	/* -------------------------------------------- */
	return `
		display: flex;
		flex-direction: column;
		gap: 0.1em;

		&::after {
			content: '';
			height: ${height};
			border: 1px solid ${color};
			border-radius: 100vmax;
			background: linear-gradient(
				to right,    
				${color} 0% ${value}%,
				${bgColor} ${value}%
			)
		}
	`;
}