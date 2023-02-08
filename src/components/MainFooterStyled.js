import styled from "styled-components";
import flexCol from "../main-styles/mixins/flex-col";

const MainFooterStyled = styled.div`
	${flexCol()};
	width: 100%;
    border-top: 1px solid;
    font-size: xx-small;
    text-align: center;
    line-height: 110%;
`;

MainFooterStyled.displayName = "MainFooterLayout";
export default MainFooterStyled;