import React from "react";
import propTypes from "prop-types";
import ButtonStyled from "./ButtonStyled";

export default function Button({ icon, color, onClick }) {
	return (
		<ButtonStyled onClick={onClick} color={color}>
			{icon}
		</ButtonStyled>
	);
}

Button.propTypes = {
	icon: propTypes.object,
	onClick: propTypes.func,
	color: propTypes.string || undefined,
};