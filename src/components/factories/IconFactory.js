import React from "react";
import { FaEnvelope as EmailIcon } from "react-icons/fa";
import { FaFeather as DefaultIcon } from "react-icons/fa";
import { FaGithubSquare as GitHubIcon } from "react-icons/fa";
import { FaMobileAlt as PhoneIcon } from "react-icons/fa";

class IconFactory extends React.Component {

	/** @param {string} iconType */
	static create(iconType) {
		switch (iconType) {

		case "email":
			return <EmailIcon/>;

		case "gitHub":
			return <GitHubIcon/>;

		case "phone":
			return <PhoneIcon/>;

		default:
			return <DefaultIcon/>;
		}
	}
}

export default IconFactory;