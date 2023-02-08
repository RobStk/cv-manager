import styled from "styled-components";
import flexRowCenter from "../main-styles/mixins/flex-row-center";

const FlexRowCenterLayout = styled.div`
	${flexRowCenter()};
	padding-top: ${props => props.paddingTop};
	padding-bottom: ${props => props.paddingBottom};
	padding-left: ${props => props.paddingLeft};
	padding-right: ${props => props.paddingRight};
`;

FlexRowCenterLayout.displayName = "FlexRowCenterLayout";
export default FlexRowCenterLayout;