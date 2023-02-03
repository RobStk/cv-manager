import styled from "styled-components";

const ComplexContentBlockStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2em;
	text-align: justify;

	.desc {
		font-variant: small-caps;
		font-size: large;
		line-height: 100%;
	}

	.content-block-items {
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		line-height: 100%;
	}
`;

ComplexContentBlockStyled.displayName = "ComplexContentBlockStyled";
export default ComplexContentBlockStyled;