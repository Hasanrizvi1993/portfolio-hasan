import React from "react";
import { projects } from "../data";

export default function Projects() {
	return (
		<section id='projects'>
			<div>
				<div>
					<h1 className="projects-title">Projects</h1>
				</div>
				<br></br>
				<div id='project-container'>
					{projects.map((project) => (
								<div className="projectinfo">
								<img
									alt='gallery'
									className='picturegallery'
									src={project.image}
								/>
								<br></br><br></br>
								<h3 className="project-name">{project.title}</h3>
								<p className="project-description">{project.description}</p>
								<a href={project.link} key={project.image}><button type="button" class="btn btn-info">Link</button></a>

									<br></br>
									<br></br>
									<br></br>
								</div>
					))}
				</div>
			</div>
		</section>
	);
}
