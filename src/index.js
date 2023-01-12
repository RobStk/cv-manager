import React from "react";
import ReactDOM from "react-dom/client";
import CVManager from "./CVManager";
import DataService from "./modules/data-service";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const dataUrl = "http://localhost:5000/personal";
const dataManager = new DataService(dataUrl);
root.render(
	<React.StrictMode>
		<CVManager dataManager={dataManager} />
	</React.StrictMode>
);