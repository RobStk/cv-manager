import styled from "styled-components";

const AboutHeaderStyled = styled.div`
	color: ${props => props.theme.colors.fgPrimary};
	background-color: ${props => props.theme.colors.bgPrimary};
	border: inherit;
	padding-right: 1.2rem;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
	line-height: 200%;
`;
AboutHeaderStyled.displayName = "AboutHeaderStyled";
export default AboutHeaderStyled;