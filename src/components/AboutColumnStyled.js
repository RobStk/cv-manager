import styled from "styled-components";

const AboutColumnStyled = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: ${props => props.theme.colors.fgPrimary};
`;

AboutColumnStyled.displayName = "AboutColumnStyled";
export default AboutColumnStyled;