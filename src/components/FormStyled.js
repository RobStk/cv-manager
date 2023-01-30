import styled from "styled-components";

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	
	.buttons {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: right;
		gap: 0.5rem;

		button {
			padding: 5px;
			transition: all 0.1s;
			
			&.accept {
				color: hsl(120deg 100% 25%);
				background-color: hsl(0deg 0% 100%);
				border-color: hsl(0deg 0% 100%);
				:hover {
				color: hsl(0deg 0% 100%);
				background-color: hsl(120deg 100% 25%);
				border-color: hsl(120deg 100% 25%);
				}
			}
			
			&.cancel {
				color: hsl(0deg 100% 50%);
				background-color: hsl(0deg 0% 100%);
				border-color: hsl(0deg 0% 100%);
				:hover {
				color: hsl(0deg 0% 100%);
				background-color: hsl(0deg 100% 50%);
				border-color: hsl(0deg 100% 50%);
				}
			}
		}
	}
`;
FormStyled.displayName = "FormStyled";
export default FormStyled;