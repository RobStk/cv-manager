import styled from "styled-components";
import flexCol from "../main-styles/mixins/flex-col";

const MainFooterStyled = styled.div`
	${flexCol({ gap: "0.5em" })};
	width: 100%;
	padding-top: 0.5em;
    border-top: 1px solid;
    font-size: xx-small;
    text-align: center;
    line-height: 110%;
`;

MainFooterStyled.displayName = "MainFooterLayout";
export default MainFooterStyled;