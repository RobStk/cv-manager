import styled from "styled-components";
import flexCol from "../main-styles/mixins/flex-col";

const MainContainerLayout = styled.div`
	${flexCol({ gap: "1rem" })}
`;

MainContainerLayout.displayName = "MainContainerLayout";
export default MainContainerLayout;