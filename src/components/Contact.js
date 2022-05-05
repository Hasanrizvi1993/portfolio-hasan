import React from "react";

export default function Contact() {
	return (
		<section id='contact'>
			<div>
				<div>
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
					<div>
						<div>
							<h2>ADDRESS</h2>
							<p>
								Los Angeles, CA								
							</p>
						</div>
						<div>
							<h2>EMAIL</h2>
							<p>hasanrizvi1993@gmail.com</p>
							<h2>PHONE</h2>
							<p>(951)518-4719</p>
							<br></br>
							<br></br>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
