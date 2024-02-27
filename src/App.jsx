import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Form({text}) {
	return (
		<form className="form">
			<label>
				{text}:
				<input type="text" name="name" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}

Form.defaultProps = {
	text: "Name"
}

function Layout(){
	return (
		<div>
			<h2> Basic </h2>
			<Form />
			<Form text="Phone No."/>
			<Form text="E-Mail"/>
			<h2> Education </h2>
			<Form text="College"/>
			<Form text="Degree"/>
			<Form text="Term"/>
		</div>
	);
}

export default function App() {
	return <Layout />
}
