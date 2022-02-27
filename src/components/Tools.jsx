import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tamagotchi from "../../src/tamagotchi.png";
import Movie from "../../src/movie.png";
import Weather from "../../src/weather.png";

import { useState } from "react";
import { render } from "@testing-library/react";

function Tools() {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img className='d-block w-100' src={Weather} alt='Third slide' />

					<Carousel.Caption>
						<h3>Weather</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' src={Movie} alt='Second slide' />

					<Carousel.Caption>
						<h3>Movies</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' src={Tamagotchi} alt='First slide' />
					<Carousel.Caption>
						<h3>Tamagotchi</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Tools;
