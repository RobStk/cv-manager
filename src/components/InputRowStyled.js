import styled from "styled-components";

const InputRowStyled = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	margin: 0.5rem 0;
	
	@media screen and (min-width: 900px){
		grid-template-columns: 8rem 25rem;
		gap: 1rem;
		margin: 0.5rem 0;
		& > *:first-child {
			justify-self: end;
			align-self: baseline;
		}
	}
`;
InputRowStyled.displayName = "InputRowStyled";
export default InputRowStyled;