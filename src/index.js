import React from "react";
import ReactDOM from "react-dom/client";
import CVManager from "./CVManager";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const dataUrl = "http://localhost:5000/personal";
root.render(
	<React.StrictMode>
		<CVManager dataUrl={dataUrl} />
	</React.StrictMode>
);