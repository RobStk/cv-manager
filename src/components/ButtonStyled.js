import styled from "styled-components";

const ButtonStyled = styled.button`
	border: none;
	background-color: ${props => props.theme.colors.bgSecondary};
	color: ${props => props.color || props.theme.colors.fgSecondary};
	font-size: 1.5rem;
	height: 100%;
	cursor: pointer;

	& * {
		pointer-events: none;
	}
`;

ButtonStyled.displayName = "ButtonStyled";
export default ButtonStyled;