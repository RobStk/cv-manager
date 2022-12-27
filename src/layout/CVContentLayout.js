import styled from "styled-components";

const CVContentLayout = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;

	> :first-child {
		background-color: ${({ theme }) => theme.colors.bgSecondary};
		color: ${({ theme }) => theme.colors.fgSecondary};
		border-top-right-radius: 2rem;

		ul {
			list-style: inside;
			font-size: smaller;
		}
	}

	> :last-child {
		> div {
			gap: 1rem;
			justify-content: space-around;
		}
	}
`;

CVContentLayout.displayName = "CVContentLayout";
export default CVContentLayout;