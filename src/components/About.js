// src/components/About.js
import React from "react";
import "../App.css";
// import myImage from "../../public/assets/images/IMG_2032";
import myImage from "../../src/hasan.jpeg";
import githubpic from "../../src/Octocat.jpg";
import linkedin from "../../src/linkedin-logo-0.png";

export default function About() {
	return (
		<section id='about-container'>
			<div className='about-me-text'>
					<h1 className="name-header">
						My name is Hasan Rizvi
						<br />
						Get to know me
					</h1>
					<br></br>
					<p className="get-to-know-me">I'm currently based near Los Angeles, CA. I am a Full Stack Software Developer, MBA graduate, and part of a music band.
					I have been in a leadership role for the almost seven years at my current job and looking to transition into the tech field as a Software Developer.
					I am trained in quantitative and qualitative research with the goal to generate sophisticated solutions.
					Currently interning at Beige Corporation as a Software Engineer building mutiple web application based on customer segments.
					I am motivated by the story that each of our creations can tell, whether that be writing an inspiration-struck short story or building a carefully cultivated website for any business needs.</p>
					
					<a href='https://github.com/Hasanrizvi1993/'>
						<img src={githubpic} alt='githubpic' id='githubpic' />
					</a>
					<a href='https://www.linkedin.com/in/rizvi-hasan'>
						<img src={linkedin} alt='linkedinpic' id='linkedinpic' />
					</a>
			</div>
			<div className='personalImage'>
						<img src={myImage} alt='myimage' id='personalImage' />
			</div>
		</section>
	);
}
