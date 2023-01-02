import styled from "styled-components";

const CVManagerLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: minmax(min-content, 62rem);
	grid-template-rows: 1fr max-content;
	justify-content: center;
`;

CVManagerLayout.displayName = "CVManagerStyled";
export default CVManagerLayout;