import styled from "styled-components";

const SectionHeaderStyled = styled.div`
	color: ${props => props.theme.colors.fgPrimary};
	background-color: ${props => props.theme.colors.bgPrimary};
	border: inherit;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
	line-height: 200%;
`;
SectionHeaderStyled.displayName = "SectionHeaderStyled";
export default SectionHeaderStyled;