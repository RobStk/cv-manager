import styled from "styled-components";

const AboutColumnStyled = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.colors.bgPrimary};
	color: ${props => props.theme.colors.fgPrimary};
`;

AboutColumnStyled.displayName = "AboutColumnStyled";
export default AboutColumnStyled;