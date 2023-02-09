import styled from "styled-components";
import addOpacityToColor from "../utils/color-opacity";

const DeletionConfirmationStyled = styled.div.attrs(props => {
	return (
		props.shadowColor = addOpacityToColor(props.theme.colors.bgPrimary, 0.3)
	);
})`
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
			border-color: ${addOpacityToColor("hsl(0deg 73% 45%)", 0.1)};
			color: white;
			box-shadow: 0 0 3px 0px ${props => props.shadowColor};

			:hover{
				background-color: ${props => props.theme.colors.redSecondary};
			}
		}
	}
`;

DeletionConfirmationStyled.displayName = "DeletionConfirmationStyled";
export default DeletionConfirmationStyled;