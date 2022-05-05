import React from "react";

export default function Contact() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
			)
			.join("&");
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message }),
		})
			.then(() => alert("Message sent!"))
			.catch((error) => alert(error));
	}

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
						</div>
					</div>
				</div>
				<form netlify name='contact' onSubmit={handleSubmit}>
					<h2>Hire Me</h2>
					<p>
						Need help of an amazing developer?
					</p>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</section>
	);
}
