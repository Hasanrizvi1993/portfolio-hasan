// src/components/About.js
import React from "react";
import "../App.css";
// import myImage from "../../public/assets/images/IMG_2032";
import myImage from "../../src/hasan.jpeg";
import githubpic from "../../src/Octocat.jpg";
import linkedin from "../../src/linkedin-logo-0.png";

export default function About() {
	return (
		<section id='about'>
			<div className='about-me-text'>
				<div>
					<h1>
						My name is Hasan Rizvi
						<br />
						Get to know me
					</h1>
					<p>I love to build amazing apps. Look at my amazing projects!</p>
					<div className='personalImage'>
						<img src={myImage} alt='myimage' id='personalImage' />
					</div>
					<hr></hr>
					<br></br>
					<h2>Technologies</h2>
					<p>Javascript, Python, HTML/ CSS, SQL</p>

					<p>React, MERN Stack, Bootstrap</p>

					<p>Node, Express, Django</p>

					<p>NOSQL Databases, MongoDB, JSON, API usage</p>
					<br></br><br></br>
					<hr></hr>
					<h3>PHONE</h3>
					<p>(951)518-4719</p>
					<h3>EMAIL</h3>
					<p>hasanrizvi1993@gmail.com</p>
					<a href='https://github.com/Hasanrizvi1993/'>
						<img src={githubpic} alt='githubpic' id='githubpic' />
					</a>
					<a href='https://www.linkedin.com/in/rizvi-hasan'>
						<img src={linkedin} alt='linkedinpic' id='linkedinpic' />
					</a>
				</div>
			</div>
		</section>
	);
}
