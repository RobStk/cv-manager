import React from "react";
import AboutMeStyled from "./AboutMeStyled";

class AboutMe extends React.Component {
	render() {
		const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis libero aperiam, iste voluptatibus, tempora quam perspiciatis numquam maiores exercitationem odio qui quidem quasi similique laudantium sed ex veniam fugit ? Commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Laborum hic dolorum debitis eveniet animi sapiente, aliquid quidem accusantium necessitatibus minima ea vitae quia.Veritatis saepe modi dolore ipsum quibusdam sint ?";
		return (
			<AboutMeStyled>
				<div className="header">
					<h2>O mnie</h2>
				</div>
				<div className="content">
					<p>{content}</p>
				</div>
			</AboutMeStyled>
		);
	}
}

export default AboutMe;