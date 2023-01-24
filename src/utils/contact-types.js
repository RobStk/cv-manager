import React from "react";
import { FaEnvelope as EmailIcon } from "react-icons/fa";
import { FaFeather as DefaultIcon } from "react-icons/fa";
import { FaGithubSquare as GitHubIcon } from "react-icons/fa";
import { FaMobileAlt as PhoneIcon } from "react-icons/fa";

export default function getContactTypes() {
	return [
		{ type: "email", icon: <EmailIcon /> },
		{ type: "gitHub", icon: <GitHubIcon /> },
		{ type: "phone", icon: <PhoneIcon /> },
		{ type: "other", icon: <DefaultIcon /> }
	];
}