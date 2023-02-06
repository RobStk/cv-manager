/* eslint-disable indent */
import styled from "styled-components";
import pieDiagram from "../main-styles/mixins/pie-diagram";

const DiagramStyled = styled.div`
    ${props => {
		switch (props.diagramType) {
			case "pie":
				return pieDiagram(props);
		}
	}}
`;

DiagramStyled.displayName = "DiagramStyled";
export default DiagramStyled;