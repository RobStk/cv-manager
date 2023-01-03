import styled from "styled-components";
import flexRowCenter from "../main-styles/mixins/flex-row-center";

const FlexRowCenterLayout = styled.div`
	${flexRowCenter({ gap: "1rem" })};
`;

FlexRowCenterLayout.displayName = "FlexRowCenterLayout";
export default FlexRowCenterLayout;