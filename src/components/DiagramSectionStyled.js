import styled from "styled-components";

const DiagramSectionStyled = styled.div`
		padding: 0.3em;
		margin-left: calc(${props => props.theme.spaces.main}*0.5);
	> * {
		padding: calc(${props => props.theme.spaces.main}*0.25) calc(${props => props.theme.spaces.main}*0.5);
	}
`;

DiagramSectionStyled.displayName = "DiagramSectionStyled";
export default DiagramSectionStyled;