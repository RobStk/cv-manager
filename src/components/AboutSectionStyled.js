import styled from "styled-components";

const AboutSectionStyled = styled.div`
	.section-header {
        border-top-right-radius: 1000px;
        border-bottom-right-radius: 1000px;
		margin-right: ${props => props.theme.spaces.main};
		padding-right: 1.2rem;
		
		> *{
			margin-left: ${props => props.theme.spaces.main};
		}
	}
	.content-container {
		margin: calc(${props => props.theme.spaces.main}*0.25) calc(${props => props.theme.spaces.main}*1);
	}
`;
AboutSectionStyled.displayName = "AboutSectionStyled";
export default AboutSectionStyled;