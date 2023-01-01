import styled from "styled-components";

const GradeStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2em;

	.grade {
		font-size: large;
		line-height: 110%;
		letter-spacing: 1px;
	}

	.desc {
		font-variant: small-caps;
		font-size: large;
		line-height: 110%;
	}

	.grade-items {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
	}
`;

GradeStyled.displayName = "GradeStyled";
export default GradeStyled;