import styled from "styled-components";
import addOpacityToColor from "../utils/color-opacity";

const ModalStyled = styled.div`
	display: none;
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.5);
	align-items: center;
	justify-content: center;

	&.active {
		display: flex;
	}

	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
	}

	.modal-content {
		position: relative;
		background-color: ${props => props.theme.colors.bgSecondary};
		color: ${props => props.theme.colors.fgSecondary};
		padding: ${props => props.theme.spaces.main};
		border-radius: 5px;
		box-shadow: 3px 3px 5px 0px ${props => addOpacityToColor(props.theme.colors.bgSecondary, 0.5)};
	}
`;

ModalStyled.displayName = "ModalStyled";
export default ModalStyled;