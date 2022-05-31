import React from "react";
import githubpic from "../../src/Octocat.jpg";
import linkedin from "../../src/linkedin-logo-0.png";

export default function Contact() {
	return (
		<section id='contact-container'>
				<div className="google-map">
					<iframe
						width='100%'
						height='100%'
						title='map'
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
						style={{ filter: "opacity(0.7)" }}
						src='https://www.google.com/maps/embed/v1/place?q=Los+Angeles,+CA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
					/>
					</div>
					<div className="personal-info">
							<h2>ADDRESS</h2>
							<p>
								Los Angeles, CA								
							</p>
							<h2>EMAIL</h2>
							<p>hasanrizvi1993@gmail.com</p>
							<h2>PHONE</h2>
							<p>(951)518-4719</p>
								<a href='https://github.com/Hasanrizvi1993/'>
							<img src={githubpic} alt='githubpic' id='githubpic' />
						</a>
						<a href='https://www.linkedin.com/in/rizvi-hasan'>
							<img src={linkedin} alt='linkedinpic' id='linkedinpic' />
						</a>
							<br></br>
							<br></br>
						
					</div>
		</section>
	);
}
