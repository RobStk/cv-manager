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
		font-size: 1.5rem;

		h1 {
			text-transform: uppercase;
			font-size: 1.25em;
		}

		h2 {
			text-transform: uppercase;
			font-size: 1em;
			font-weight: unset;
		}
		
		${props => fancyHeader({
			height: height,
			color: props.theme.colors.fgSecondary,
			bgColor: props.theme.colors.bgSecondary
		})}

		> * {
            padding-left: ${props => props.theme.spaces.main};
            padding-right: ${props => props.theme.spaces.main};
        }
	}

	.contact-wrapper {
		padding-top: 0.5rem;
		padding-right: 0.5rem;
	}
`;

CVHeaderLayout.displayName = "CVHeaderLayout";
export default CVHeaderLayout;