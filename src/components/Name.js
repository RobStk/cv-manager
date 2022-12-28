import React from "react";
import NameStyled from "./NameStyled";

class Name extends React.Component {
	/* -------------------------------------------- */
	/* Constructor 									*/
	/* -------------------------------------------- */
	constructor(props) {
		super(props);
		this.name = "Name Surname";
		this.profession = "";
	}

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const nameElement = <h1>{this.name}</h1>;
		const professionElement = this.profession ? <h2>{this.profession}</h2> : null;
		return (
			<NameStyled>
				{nameElement}
				{professionElement}
			</NameStyled>
		);
	}
}

export default Name;