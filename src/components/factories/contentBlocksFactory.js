import React from "react";
import ComplexContentBlock from "../ComplexContentBlock";
import SimpleContentBlock from "../SimpleContentBlock";

/* eslint-disable indent */
export default function createContentBlock(props) {
	switch (typeof props.data) {
		case "string": {
			return (
				<SimpleContentBlock key={props.key} data={props.data} onUpdate={props.onUpdate} />
			);
		}
		case "object": {
			return (
				<ComplexContentBlock key={props.key} data={props.data} onUpdate={props.onUpdate} />
			);
		}
	}
}