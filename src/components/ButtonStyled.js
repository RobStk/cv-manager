import styled from "styled-components";

const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	background: none;
	font-size: 1.4rem;
	height: 2rem;
	width: 2rem;
	cursor: pointer;
	opacity: 0.8;
	transition: opacity 0.1s;

	color: ${props => props.theme.colors.fgSecondary};
	background-color: ${props => props.color || props.theme.colors.bgSecondary};
	border-color: ${props => props.color || props.theme.colors.bgSecondary};
	
	& * {
		pointer-events: none;
	}

	:hover {
		opacity: 1;
	}
`;

ButtonStyled.displayName = "ButtonStyled";
export default ButtonStyled;