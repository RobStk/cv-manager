import React from "react";
import propTypes from "prop-types";
import ButtonStyled from "./ButtonStyled";

export default function Button({ className, name, icon, color, backgroundColor, onClick }) {
	return (
		<ButtonStyled className={className} name={name} onClick={onClick} color={color} backgroundColor={backgroundColor}>
			{icon}
		</ButtonStyled>
	);
}

Button.propTypes = {
	className: propTypes.string,
	name: propTypes.string,
	icon: propTypes.object,
	onClick: propTypes.func,
	color: propTypes.string || undefined,
	backgroundColor: propTypes.string || undefined,
};