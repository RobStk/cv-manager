import styled from "styled-components";

const GradeStyled = styled.div`
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
`;

GradeStyled.displayName = "GradeStyled";
export default GradeStyled;