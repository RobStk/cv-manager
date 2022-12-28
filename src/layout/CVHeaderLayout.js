/* eslint-disable indent */
import styled from "styled-components";
import fancyHeader from "../main-styles/mixins/fancy-header";

const height = "8rem";

const CVHeaderLayout = styled.div`
	display: grid;
	grid-template-columns: 60% 1fr;

	.name-wrapper {
		height: ${height};
		color: ${props => props.theme.colors.fgSecondary};
		
		${props => fancyHeader({
			height: height,
			color: props.theme.colors.fgSecondary,
			bgColor: props.theme.colors.bgSecondary
		})}

		> * {
            padding-left: ${props => props.theme.spaces.main};
        }
	}
`;

CVHeaderLayout.displayName = "CVHeaderLayout";
export default CVHeaderLayout;