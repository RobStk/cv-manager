import styled from "styled-components";

const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	background: none;
	cursor: pointer;
	color: ${props => props.theme.colors.fgSecondary};
	background-color: ${props => props.color || props.theme.colors.bgSecondary};
	border-color: ${props => props.color || props.theme.colors.bgSecondary};
	
	& * {
		pointer-events: none;
	}
`;

ButtonStyled.displayName = "ButtonStyled";
export default ButtonStyled;