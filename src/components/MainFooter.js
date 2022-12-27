import React from "react";
import InfoBar from "./InfoBar";
import MainFooterStyled from "./MainFooterStyled";

class MainFooter extends React.Component {
	render() {
		return (
			<MainFooterStyled>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus voluptates libero, maiores illo deserunt quibusdam. Temporibus officia repellendus dolores maxime, ut ea molestias. Fuga ipsa ullam tenetur nulla ab.</p>
				<InfoBar content="placeholder" />
			</MainFooterStyled>
		);
	}
}

export default MainFooter;