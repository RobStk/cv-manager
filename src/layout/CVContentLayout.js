import styled from "styled-components";

const CVContentLayout = styled.div`
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
`;

CVContentLayout.displayName = "CVContentLayout";
export default CVContentLayout;