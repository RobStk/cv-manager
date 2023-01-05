import styled from "styled-components";

const DiagramsColumnStyled = styled.div`	
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	.diagram-section {
		h2 {
			text-transform: capitalize;
			margin-bottom: 0.7rem;
		}
	}

	
`;

DiagramsColumnStyled.displayName = "DiagramsColumnStyled";
export default DiagramsColumnStyled;