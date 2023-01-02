import styled from "styled-components";

const AboutColumnStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	.header {
        background-color: ${props => props.theme.colors.bgPrimary};
        color: ${props => props.theme.colors.fgPrimary};
        padding-left: 0;
        margin-bottom: 0.6rem;
        border-top-right-radius: 1000px;
        border-bottom-right-radius: 1000px;
		font-size: large;
		
		> *{
			margin-left: ${props => props.theme.spaces.main};
		}
	}
	
	.content {
		> *{
			margin-left: ${props => props.theme.spaces.main};
			margin-right: 1rem;

			h3 {
				font-size: large;
				line-height: 110%;
				letter-spacing: 1px;
				text-transform: uppercase;
				font-weight: bold;
			}
		}
	}
`;

AboutColumnStyled.displayName = "AboutColumnStyled";
export default AboutColumnStyled;