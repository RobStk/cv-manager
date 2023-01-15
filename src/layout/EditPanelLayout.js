import styled from "styled-components";
import flexRowCenter from "../main-styles/mixins/flex-row-center";

const EditPanelLayout = styled.div`
	${flexRowCenter({ gap: "0.75em" })}
	position: absolute;
	right: 0;
	z-index: 1;
	padding: 0.5rem;
`;

EditPanelLayout.displayName = "EditPanelLayout";
export default EditPanelLayout;