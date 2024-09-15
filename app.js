(function () {
	[...document.querySelectorAll(".control")].forEach((button) => {
		button.addEventListener("click", function () {
			document.querySelector(".active-btn").classList.remove("active-btn");
			this.classList.add("active-btn");
			document.querySelector(".active").classList.remove("active");
			document.getElementById(button.dataset.id).classList.add("active");
		});
	});
	document.querySelector(".theme-btn").addEventListener("click", () => {
		document.body.classList.toggle("light-mode");
	});
})();

const contactForm = document.getElementById("contact-form");

const contactMessage = document.getElementById("contact-message");

const outPutMessage = document.getElementById("output-message");

const sendEmail = (e) => {
	e.preventDefault();

	outPutMessage.textContent = "Loading...";
	// serviceId - templateId - #form - publicKey
	emailjs
		.sendForm(
			"service_43bwsct",
			"template_2nb5qxj",
			"#contact-form",
			"DWVKIUnASOSBWDrQ_"
		)
		.then(() => {
			// Show sent message
			outPutMessage.textContent = "Message sent successfully ✅";

			// Remove message after five seconds
			setTimeout(() => {
				outPutMessage.textContent = "";
			}, 3000);

			// Clear inpyt fields
			contactForm.reset();
		})
		.catch(() => {
			outPutMessage.textContent =
				"Couldn't send message (service error) try again later. ❌";
		});
};

contactForm.addEventListener("submit", sendEmail);
