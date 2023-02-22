import styled from "styled-components";
import flexRowCenter from "../main-styles/mixins/flex-row-center";

const EditPanelLayout = styled.div`
	${flexRowCenter()}
	gap: 0.4em;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 1;
	opacity: 100;
	transition: opacity 0.2s;
	width: max-content;

	button {
		font-size: 1rem;
		height: 1.5rem;
		width: 1.5rem;
		opacity: 0.8;
		transition: opacity 0.1s;

		:hover, :focus {
			opacity: 1;
		}
	}

	&.inactive {
		opacity: 0;
	}
`;

EditPanelLayout.displayName = "EditPanelLayout";
export default EditPanelLayout;