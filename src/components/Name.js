import React from "react";
import propTypes from "prop-types";
import NameStyled from "./NameStyled";

class Name extends React.Component {
	/* -------------------------------------------- */
	/* Types 										*/
	/* -------------------------------------------- */
	static propTypes = {
		data: propTypes.string,
	};

	/* -------------------------------------------- */
	/* Render 										*/
	/* -------------------------------------------- */
	render() {
		const name = this.props.data || "";
		const nameElement = <h1>{name}</h1>;
		return (
			<NameStyled>
				{nameElement}
			</NameStyled>
		);
	}
}

export default Name;