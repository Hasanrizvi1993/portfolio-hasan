// src/components/About.js
import React from "react";

// import myImage from "../../public/assets/images/IMG_2032";
import myImage from "../../src/hasan.jpeg";

export default function About() {
	return (
		<section id='about'>
			<div>
				<div>
					<h1>
						My name is Hasan Rizvi
						<br />
						Get to know me
					</h1>
					<p>I love to build amazing apps. Look at my amazing projects!</p>
				</div>
				<div>
					<img src={myImage} alt='myimage' />
				</div>
			</div>
		</section>
	);
}
