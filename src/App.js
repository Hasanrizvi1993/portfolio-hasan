import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import "./App.css";

export default function App() {
	return (
		<main className='App'>
			<Navbar />
			<About />
			<br />
			<Projects />
			<Contact />
		</main>
	);
}
