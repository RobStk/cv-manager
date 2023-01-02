import styled from "styled-components";

const GradeStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2em;
	text-align: justify;

	.desc {
		font-variant: small-caps;
		font-size: large;
		line-height: 100%;
	}

	.grade-items {
		margin-top: 0.1rem;
		margin-bottom: 0.1rem;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		line-height: 100%;
	}
`;

GradeStyled.displayName = "GradeStyled";
export default GradeStyled;