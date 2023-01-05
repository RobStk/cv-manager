import styled from "styled-components";

const PieDiagramStyled = styled.div.attrs(props => {
	/* -------------------------------------------- */
	/* Configs 										*/
	/* -------------------------------------------- */
	let rotateBase = 45;
	const rotateAdditional = (props.value > 0 && props.value <= 100) ? (360 * props.value / 100) : 0;
	return ({
		size: props.size || "100px",
		color: props.color || props.theme.colors.fgPrimary,
		bgColor: props.bgColor || props.theme.colors.bgPrimary,
		rotateBase: rotateBase,
		rotate: -rotateBase + rotateAdditional
	});
	/* -------------------------------------------- */
})`
	${(props) => { console.log(props); }}
    display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 50%;
	width: ${props => props.size};
	height: ${props => props.size};
	padding: ${props => props.size * 0.11};
	color: ${props => props.color};
	-webkit-box-shadow: 0px 0px 0px 1px ${props => props.color};
	-moz-box-shadow: 0px 0px 0px 1px ${props => props.color};
	box-shadow: 0px 0px 0px 1px ${props => props.color};

	&::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: inherit;
		border: calc(${props => props.size}*0.5) solid transparent;
		border-top-color: ${props => (props.value > 0) && props.color};
		border-right-color: ${props => (props.value > 25) && props.color};
		border-bottom-color: ${props => (props.value > 50) && props.color};
		rotate: ${props => props.rotateBase}deg;
	}

	&::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: inherit;
		border: calc(${props => props.size}*0.5) solid ${props => props.bgColor};
		border-top-color: transparent;
		border-left-color: ${props => (props.value > 25) && "transparent"};
		border-bottom-color: ${props => (props.value > 50) && "transparent"};
		border-right-color: ${props => (props.value > 75) && "transparent"};
		border-top-color: ${props => (props.value > 75) && props.color};
		rotate: ${props => props.rotate}deg;
	}

	> * {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		background-color: ${props => props.bgColor};
		height: 80%;
		width: 80%;
		padding: 0.3em;
		border-radius: inherit;
		border: 1px solid ${props => props.color};
		font-weight: 600;
		text-align: center;
	}
`;

PieDiagramStyled.displayName = "SkillsPieStyled";
export default PieDiagramStyled;