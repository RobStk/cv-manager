import React from "react";
import propTypes from "prop-types";
import ButtonStyled from "./ButtonStyled";

export default function Button({ icon, clickAction, color }) {
	return (
		<ButtonStyled onClick={clickAction} color={color}>
			{icon}
		</ButtonStyled>
	);
}

Button.propTypes = {
	icon: propTypes.object,
	clickAction: propTypes.func,
	color: propTypes.string || undefined,
};