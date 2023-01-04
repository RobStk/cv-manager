import styled from "styled-components";
import flexCol from "../main-styles/mixins/flex-col";

const FlexColumnLayout = styled.div`
	${flexCol({ gap: "1rem" })};
`;

FlexColumnLayout.displayName = "FlexRowCenterLayout";
export default FlexColumnLayout;