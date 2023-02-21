import styled from "styled-components";

const SectionHeaderStyled = styled.div`
	color: ${props => props.theme.colors.fgPrimary};
	background-color: ${props => props.theme.colors.bgPrimary};
	border: inherit;
	padding-top: calc(${props => props.theme.spaces.main}*0.15);
	padding-bottom: calc(${props => props.theme.spaces.main}*0.15);
	line-height: 200%;
`;
SectionHeaderStyled.displayName = "SectionHeaderStyled";
export default SectionHeaderStyled;