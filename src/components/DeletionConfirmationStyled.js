import styled from "styled-components";
import addOpacityToColor from "../utils/color-opacity";

const DeletionConfirmationStyled = styled.div.attrs(props => ({
	/* -------------------------------------------- */
	/* Configs 										*/
	/* -------------------------------------------- */
	acceptBtnShadowColor: addOpacityToColor(props.theme.colors.bgPrimary, 0.3),
	cancelBtnShadowColor: addOpacityToColor(props.theme.colors.bgPrimary, 0.3),
	cancelBtnBgColor: addOpacityToColor(props.theme.colors.bgPrimary, 0.1),
	cancelBtnBgColorHover: addOpacityToColor(props.theme.colors.bgPrimary, 0.2),
	btnBorderColor: addOpacityToColor("hsl(0deg 73% 45%)", 0.1)
	/* -------------------------------------------- */
}))`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
	}

	button {
		padding: 0.5rem 3rem;
		cursor: pointer;
		border: none;
		border-radius: 3px;
		transition: all 0.1s;
		
		&.accept {
			background-color: ${props => props.theme.colors.redPrimary};
			border-color: ${props => props.btnBorderColor};
			color: white;
			box-shadow: 0 0 3px 0px ${props => props.acceptBtnShadowColor};

			:hover{
				background-color: ${props => props.theme.colors.redSecondary};
			}
		}

		&.cancel {
			background-color: ${props => props.cancelBtnBgColor};
			border-color: ${props => props.btnBorderColor};
			color: white;
			box-shadow: 0 0 3px 0px ${props => props.cancelBtnShadowColor};

			:hover{
				background-color: ${props => props.cancelBtnBgColorHover};
			}
		}
	}
`;

DeletionConfirmationStyled.displayName = "DeletionConfirmationStyled";
export default DeletionConfirmationStyled;