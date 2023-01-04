import styled from "styled-components";

const BarDiagramStyled = styled.div.attrs(props => {
	/* -------------------------------------------- */
	/* Configs 										*/
	/* -------------------------------------------- */
	return ({
		value: (props.value > 0 && props.value <= 100) ? props.value : 0,
		height: props.height || "8px",
		color: props.color || props.theme.colors.fgPrimary,
		bgColor: props.bgColor || props.theme.colors.bgPrimary,
		percentValue: props.value + "%"
	});
	/* -------------------------------------------- */
})`
	display: flex;
	flex-direction: column;
	padding-top: 0.25em;
	padding-bottom: 0.25em;
	gap: 0.1em;

	&::after {
		content: '';
		height: ${props => props.height};
		border: 1px solid ${props => props.color};
		border-radius: 100vmax;
		background: linear-gradient(
		to right,    
		${props => props.color} 0% ${props => props.value}%,
		${props => props.bgColor} ${props => props.value}%
		)
	}
`;

BarDiagramStyled.displayName = "BarDiagramStyled";
export default BarDiagramStyled;