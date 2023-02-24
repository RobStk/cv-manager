import styled from "styled-components";

const ComplexContentBlockStyled = styled.div`
	display: flex;
	flex-direction: column;
	text-align: justify;

	.subtitle {
		font-variant: small-caps;
		font-size: 1.3em;
		line-height: 100%;
	}

	.content-block-header {
		margin-bottom: 0.3em;
	}

	.content-block-items {
		display: flex;
		flex-direction: column;
		gap: 0.3em;
		line-height: 100%;
	}

	.date {
		line-height: 100%;
	}
`;

ComplexContentBlockStyled.displayName = "ComplexContentBlockStyled";
export default ComplexContentBlockStyled;