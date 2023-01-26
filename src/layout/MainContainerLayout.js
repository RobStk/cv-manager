/* eslint-disable indent */
import styled from "styled-components";
import flexCol from "../main-styles/mixins/flex-col";
import fancyHeader from "../main-styles/mixins/fancy-header";

const nameWrapperHeight = "8rem";

const MainContainerLayout = styled.div`
	${flexCol({ gap: "1rem" })}

	.cv-header {
		display: grid;
		grid-template-columns: 60% 1fr;

		.name-wrapper {
			height: ${nameWrapperHeight};
			color: ${props => props.theme.colors.fgSecondary};

			h1 {
				text-transform: uppercase;
			}

			h2 {
				text-transform: uppercase;
				font-weight: unset;
			}
			
			${props => fancyHeader({
				height: nameWrapperHeight,
				color: props.theme.colors.fgSecondary,
				bgColor: props.theme.colors.bgSecondary
			})}

			> * {
				padding-left: ${props => props.theme.spaces.main};
				padding-right: ${props => props.theme.spaces.main};
			}
		}
	}

	.cv-content {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;

		.content-column {
			height: 100%;
			display: flex;
			flex-direction: column;
			padding: ${props => props.theme.spaces.main};
		}

		.content-column:first-child {
			background-color: ${({ theme }) => theme.colors.bgSecondary};
			color: ${({ theme }) => theme.colors.fgSecondary};
			border-top-right-radius: 2rem;
			padding-left: 0;
		}

		.content-column:last-child {
			> div {
				gap: 1rem;
				justify-content: space-evenly;
			}
		}
	}
`;

MainContainerLayout.displayName = "MainContainerLayout";
export default MainContainerLayout;