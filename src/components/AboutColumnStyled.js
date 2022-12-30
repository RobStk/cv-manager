import styled from "styled-components";

const AboutColumnStyled = styled.div`
	.header {
        background-color: ${props => props.theme.colors.bgPrimary};
        color: ${props => props.theme.colors.fgPrimary};
        padding-left: 0;
        margin-bottom: 0.6em;
        border-top-right-radius: 1000px;
        border-bottom-right-radius: 1000px;
		> *{
			margin-left: ${props => props.theme.spaces.main};
		}
	}
	
	.content {
		> *{
			margin-left: ${props => props.theme.spaces.main};
		}
	}
`;

AboutColumnStyled.displayName = "AboutColumnStyled";
export default AboutColumnStyled;