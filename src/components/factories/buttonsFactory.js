/* eslint-disable indent */
import React from "react";
import { FaRegEdit as EditIcon, FaRegTrashAlt as DeleteIcon, FaCheck as AcceptIcon, FaTimes as CancelIcon } from "react-icons/fa";
import Button from "../Button";

/**
 * @param {object} param0 
 * @param {string} param0.type
 * @param {function} param0.clickAction
 * @param {string} param0.color
 * @returns 
 */
export default function createButton({ type, onClick, color, backgroundColor }) {
	switch (type) {
		case "edit": {
			const icon = <EditIcon />;
			return <Button icon={icon} onClick={onClick} color={color} backgroundColor={backgroundColor} />;
		}
		case "delete": {
			const icon = <DeleteIcon />;
			return <Button icon={icon} onClick={onClick} color={color} backgroundColor={backgroundColor || "hsl(0deg 100% 50%)"} />;
		}
		case "accept": {
			const icon = <AcceptIcon />;
			return <Button className="accept" name="submit" icon={icon} onClick={onClick} color={color || "hsl(0deg 0% 100%)"} backgroundColor={backgroundColor || "hsl(120deg 100% 25%)"} />;
		}
		case "cancel": {
			const icon = <CancelIcon />;
			return <Button className="cancel" name="cancel" icon={icon} onClick={onClick} color={color || "hsl(0deg 0% 100%)"} backgroundColor={backgroundColor || "hsl(0deg 100% 50%)"} />;
		}
		case "close": {
			const icon = <CancelIcon />;
			return <Button className="close" name="close" icon={icon} onClick={onClick} color={color || "hsl(0deg 0% 100%)"} backgroundColor={backgroundColor || "hsl(0deg 100% 50%)"} />;
		}
		default: {
			throw Error("Unsupported button type.");
		}
	}
}