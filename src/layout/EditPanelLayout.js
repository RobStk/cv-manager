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

	button {
		font-size: 1em;
		height: 1.5em;
		width: 1.5em;
		opacity: 0.8;
		transition: opacity 0.1s;

		:hover, :focus {
			opacity: 1;
		}
	}

	&.inactive {
		opacity: 0;
	}

	:focus-within {
		opacity: 1;
	}
`;

EditPanelLayout.displayName = "EditPanelLayout";
export default EditPanelLayout;