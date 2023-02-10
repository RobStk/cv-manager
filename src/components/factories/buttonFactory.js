/* eslint-disable indent */
import React from "react";
import Button from "../Button";
import {
	FaRegEdit as EditIcon,
	FaRegTrashAlt as DeleteIcon,
	FaCheck as AcceptIcon,
	FaTimes as CancelIcon,
	FaPlus as AddIcon
} from "react-icons/fa";

/**
 * @param {object} param0 
 * @param {string} param0.type
 * @param {function} param0.clickAction
 * @param {string} param0.color
 * @returns 
 */
export default function createButton(props) {
	const opts = { ...props };
	switch (opts.type) {
		case "add": {
			opts.icon = <AddIcon />;
			opts.className = "add";
			opts.name = "add";
			break;
		}
		case "accept": {
			opts.icon = <AcceptIcon />;
			opts.className = "accept";
			opts.name = "submit";
			opts.color = opts.color || "hsl(0deg 0% 100%)";
			opts.backgroundColor = opts.backgroundColor || "hsl(120deg 100% 25%)";
			break;
		}
		case "cancel": {
			opts.icon = <CancelIcon />;
			opts.color = opts.color || "hsl(0deg 0% 100%)";
			opts.backgroundColor = opts.backgroundColor || "hsl(0deg 100% 50%)";
			opts.className = "cancel";
			opts.name = "cancel";
			break;
		}
		case "close": {
			opts.icon = <CancelIcon />;
			opts.color = opts.color || "hsl(0deg 0% 100%)";
			opts.backgroundColor = opts.backgroundColor || "hsl(0deg 100% 50%)";
			opts.className = "close";
			opts.name = "close";
			break;
		}
		case "delete": {
			opts.icon = <DeleteIcon />;
			opts.backgroundColor = opts.backgroundColor || "hsl(0deg 100% 50%)";
			opts.className = "delete";
			opts.name = "delete";
			break;
		}
		case "edit": {
			opts.icon = <EditIcon />;
			opts.className = "edit";
			opts.name = "edit";
			break;
		}
		default: {
			throw Error("Unsupported button type.");
		}
	}
	return <Button {...opts} />;
}