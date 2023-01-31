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

	.modal-content-wrapper {
		padding: 0.7rem 0.2rem;
		border-radius: 5px;
		background-color: ${props => props.theme.colors.bgSecondary};
		display: flex;
		position: relative;
		max-height: 80%;
		max-width: 80%;
		color: ${props => props.theme.colors.fgSecondary};
	}

	.close {
		position: absolute;
		top: -25px;
		right: -22px;
		padding: 5px;
		background-color: ${props => props.theme.colors.bgSecondary};
		border: none;
		border-radius: 9999px;
		color: inherit;
		cursor: pointer;
		box-shadow: 3px 3px 5px 0px ${props => addOpacityToColor(props.theme.colors.bgSecondary, 0.5)};
	}

	.modal-content {
		background-color: ${props => props.theme.colors.bgSecondary};
		color: ${props => props.theme.colors.fgSecondary};
		padding: ${props => props.theme.spaces.main};
		border-radius: 5px;
		box-shadow: 3px 3px 5px 0px ${props => addOpacityToColor(props.theme.colors.bgSecondary, 0.5)};
		overflow: auto;

		::-webkit-scrollbar {
			width: 12px;
			background-color: ${props => addOpacityToColor(props.theme.colors.bgPrimary, 0.1)};
			border-radius: 10px;
		}

		::-webkit-scrollbar-track {
			border-radius: 10px;
		}

		::-webkit-scrollbar-thumb {
			background-color: ${props => addOpacityToColor(props.theme.colors.bgPrimary, 0.7)};
			border-radius: 10px;
		}
	}

	textarea {
		resize: none;
	}
`;

ModalStyled.displayName = "ModalStyled";
export default ModalStyled;