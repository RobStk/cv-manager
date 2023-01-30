import styled from "styled-components";

const ButtonStyled = styled.button`
	box-sizing: content-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	background: none;
	cursor: pointer;
	color: ${props => props.color || props.theme.colors.fgSecondary};
	background-color: ${props => props.backgroundColor || props.theme.colors.bgSecondary};
	border-color: ${props => props.backgroundColor || props.theme.colors.bgSecondary};
	
	& * {
		pointer-events: none;
	}
`;

ButtonStyled.displayName = "ButtonStyled";
export default ButtonStyled;