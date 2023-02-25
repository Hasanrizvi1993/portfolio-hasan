import React from "react";
import "../Skills.css";
import MERN from "../../src/MERN-logo.png";

export default function Skills() {
	return (
		<section id='skills'>
			<div id='skills-title' className='skills-container'>
				<hr></hr>
				<br></br>
				<h2 className='skills-title'>Tools In My Belt</h2>
				<br></br>
				<br></br>
				<div className='stacks'>
					<div className='stack-item'>
						<p className='technology'>Python</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/p/3/python.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>Javascript</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/j/33/javascript.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>HTML</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/h/90/html-5.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>CSS</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/c/18/css.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>React</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/r/63/react.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>MongoDB</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>PostgreSQL</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/p/93/postgresql.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>Django</p>
						<img
							class='icon'
							src='https://cdn.cdnlogo.com/logos/d/3/django.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>Express</p>
						<img
							class='icon'
							src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
							alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>MERN</p>
						<img style={{ width: 110 }} class='icon' src={MERN} alt=''></img>
					</div>
					<div className='stack-item'>
						<p className='technology'>EJS</p>
						<img
							class='icon'
							src='https://ejs.bootcss.com/assets/images/ejs-logo.png'
							alt=''></img>
					</div>
				</div>
			</div>
		</section>
	);
}
