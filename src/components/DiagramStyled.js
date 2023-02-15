/* eslint-disable indent */
import styled from "styled-components";
import barDiagram from "../main-styles/mixins/bar-diagram";
import listItemDiagram from "../main-styles/mixins/list-item-diagram";
import pieDiagram from "../main-styles/mixins/pie-diagram";

const DiagramStyled = styled.div`
    ${props => {
		switch (props.diagramType) {
			case "pie": return pieDiagram(props);
			case "bar": return barDiagram(props);
			case "list": return listItemDiagram(props);
		}
	}}
`;

DiagramStyled.displayName = "DiagramStyled";
export default DiagramStyled;