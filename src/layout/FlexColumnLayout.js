import styled from "styled-components";
import flexCol from "../main-styles/mixins/flex-col";

const FlexColumnLayout = styled.div.attrs(props => ({
	/* -------------------------------------------- */
	/* Configs 										*/
	/* -------------------------------------------- */
	gap: props.gap || "1rem"
	/* -------------------------------------------- */
})
)`
	${props => flexCol({ gap: props.gap })}
`;

FlexColumnLayout.displayName = "FlexColumnLayout";
export default FlexColumnLayout;