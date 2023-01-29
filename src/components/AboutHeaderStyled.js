import styled from "styled-components";

const AboutHeaderStyled = styled.div`
	color: ${props => props.theme.colors.fgPrimary};
	background-color: ${props => props.theme.colors.bgPrimary};
	border: inherit;
	padding-right: ${props => props.theme.spaces.main};
	line-height: 200%;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
`;
AboutHeaderStyled.displayName = "AboutHeaderStyled";
export default AboutHeaderStyled;