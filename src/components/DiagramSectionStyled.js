import styled from "styled-components";

const DiagramSectionStyled = styled.div`
		margin-left: calc(${props => props.theme.spaces.main}*0.5);
	> * {
		padding: calc(${props => props.theme.spaces.main}*0.1) calc(${props => props.theme.spaces.main}*0.5);
	}
`;

DiagramSectionStyled.displayName = "DiagramSectionStyled";
export default DiagramSectionStyled;