import React from "react";
import { projects } from "../data";

export default function Projects() {
	return (
		<section id='projects'>
			<div>
				<div>
					<h1>Apps I've Built</h1>
					<p>
						I have built web apps using technologies including React, NodeJS,
						Python, Django, Express, EJS, HTML, CSS, Materialize, Bootstrap,
						Javascript, and MongoDB.
					</p>
				</div>
				<div className='projects'>
					{projects.map((project) => (
						<a href={project.link} key={project.image}>

								<div className="projectinfo">
								<img
									alt='gallery'
									className='picturegallery'
									src={project.image}
								/>
									<br></br>
									<br></br>
									<br></br>
								</div>
	
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
