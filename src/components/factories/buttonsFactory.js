/* eslint-disable indent */
import React from "react";
import { FaRegEdit as EditIcon, FaRegTrashAlt as DeleteIcon } from "react-icons/fa";
import Button from "../Button";

/**
 * @param {object} param0 
 * @param {string} param0.type
 * @param {function} param0.clickAction
 * @param {string} param0.color
 * @returns 
 */
export default function createButton({ type, clickAction, color }) {
	switch (type) {
		case "edit": {
			const icon = <EditIcon />;
			return <Button icon={icon} clickAction={clickAction} color={color} />;
		}
		case "delete": {
			const icon = <DeleteIcon />;
			return <Button icon={icon} clickAction={clickAction} color={color || "red"} />;
		}
		default: {
			return <Button />;
		}
	}
}