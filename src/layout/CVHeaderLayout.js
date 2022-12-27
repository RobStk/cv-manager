import styled from "styled-components";

const CVHeaderLayout = styled.div`
	$height: 8rem;

	display: grid;
	grid-template-columns: 60% auto 1fr;
`;

CVHeaderLayout.displayName = "CVHeaderLayout";
export default CVHeaderLayout;