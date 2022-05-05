import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tamagotchi from "../../src/tamagotchi.png";
import Weather from "../../src/weather.png";
import Mybnb from "../../src/bnb.png"


function Tools() {
	return (
		<div className="carousel">
			<Carousel fade>
				<Carousel.Item>
					<img className='d-block w-100' src={Weather} alt='Third slide' height="600" width="20"/>

					<Carousel.Caption>
						<h3>Weather</h3>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' src={Mybnb} alt='Second slide' height="600" width="20"/>

					<Carousel.Caption>
						<h3>Movies</h3>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' src={Tamagotchi} alt='First slide' height="600" width="20"/>
					<Carousel.Caption>
						<h3>Tamagotchi</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Tools;
