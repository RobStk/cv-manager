import styled from "styled-components";
import flexRowCenter from "../main-styles/mixins/flex-row-center";

const EditPanelLayout = styled.div`
	${flexRowCenter({ gap: "0.75em" })}
	position: absolute;
	right: 0;
	top: 0;
	z-index: 1;
	padding: 0.3rem;
	opacity: 100;
	transition: opacity 0.2s;

	&.inactive {
		opacity: 0;
	}
`;

EditPanelLayout.displayName = "EditPanelLayout";
export default EditPanelLayout;