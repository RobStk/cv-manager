import styled from "styled-components";
import flexCol from "../main-styles/mixins/flex-col";
import flexRowCenter from "../main-styles/mixins/flex-row-center";

const EditableDiagramContainerStyled = styled.ul.attrs(props => {
	if (props.type === "bar") return { layout: flexCol };
	if (props.type === "pie") return { layout: flexRowCenter };
})`
	${props => props.layout && props.layout()};
	gap: ${props => props.gap || "0"};
	list-style: ${props => (props.type === "list") ? "inside" : "none"};
`;
EditableDiagramContainerStyled.displayName = "EditableDiagramContainerStyled";
export default EditableDiagramContainerStyled;