import styled from "styled-components";

const DiagramColumnStyled = styled.div`	
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	.diagram-section {
		h2 {
			text-transform: capitalize;
		}
	}

	
`;

DiagramColumnStyled.displayName = "DiagramColumnStyled";
export default DiagramColumnStyled;