// Fungsi untuk validasi form
function validateForm() {
	const nameInput = document.forms["contact-us"]["full-name"].value;
	const emailInput = document.forms["contact-us"]["email-address"].value;
	const selectChoice = document.forms["contact-us"]["interest-choice"].value;
	document.querySelectorAll(".input-error").forEach(elm => elm.remove());
	const selection = checkSelectInput(selectChoice);

	if (nameInput == "" || emailInput == "") {
		checkNameInput(nameInput);
		checkEmailInput(emailInput);
		alert("Please fill the data.");
		
		
		return false;
	}

	console.log("Name: " + nameInput + " Email: " + emailInput + " Selection: " + selection);
	alert("Your data has been submitted.");
	return false;
}

function checkNameInput(name) {
	if (name == "") {
		const nameLabel = document.getElementById("full-name");
		const elm	= document.createElement("span");
		elm.classList.add("input-error");
		const errorText = document.createTextNode("Please input your name!");
		elm.appendChild(errorText);
		return nameLabel.after(elm);
	}
}

function checkEmailInput(email) {
	if (email == "") {
		const emailLabel = document.getElementById("email-address");
		const elm	= document.createElement("span");
		elm.classList.add("input-error");
		const errorText = document.createTextNode("Please input your email!");
		elm.appendChild(errorText);
		return emailLabel.after(elm);
	}
}

function checkSelectInput(select) {
	let choice;
	switch(select) {
		case "0":
			choice = "Nothing";
			return choice;
		case "1":
			choice = "Destination Choice";
			return choice;
		case "2":
			choice = "Discount & Offer";
			return choice;
		case "3":
			choice = "Quality Service";
			return choice;
		default:
			choice = "Nothing";
			return choice;
	}
}

// Fungsi untuk auto slide show
let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("slide");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	slides[slideIndex-1].style.display = "flex";
	setTimeout(showSlides, 5000);
}