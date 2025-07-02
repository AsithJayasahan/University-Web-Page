const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phonenumber = document.getElementById('phonenumber');
const regno = document.getElementById('regno');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const phonenumberValue = firstname.value.trim();
	const regnoValue = regno.value.trim();
	


	if(firstnameValue === '') {
		setErrorFor(firstname, 'Firstname cannot be blank');
	}else if (!isFirstname(firstnameValue)) {
		setErrorFor(firstname, 'Firstname is not valid');
	} else {
		setSuccessFor(firstname);
	}

	if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname cannot be blank');
	}else if (!isLastname(lastnameValue)) {
		setErrorFor(lastname, 'Lastname is not valid');
	} else {
		setSuccessFor(lastname);
	}
	

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if (!isUsername(usernameValue)) {
		setErrorFor(username, 'Username must be include at 8 characters');
	}else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email is not valid');
	} else {
		setSuccessFor(email);
	}

	if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Phone number cannot be blank');
	} else if (!isPhonenumber(phonenumberValue)) {
		setErrorFor(phonenumber, 'Phone number is not valid');
	} else {
		setSuccessFor(phonenumber);
	}

	

	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'Password must be include at lest 8 character with latter,character,numer');
	}else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Enter your password again');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

	if(regnoValue === '') {
		setErrorFor(regno, 'Register number cannot be blank');
	} else if (!isRegno(regnoValue)) {
		setErrorFor(regno, 'Register number is not valid');
	} else {
		setSuccessFor(regno);
	}

	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isFirstname(firstname){
	return /^(([A-Za-z]){2,15})$/.test(firstname);
}

function isLastname(lastname){
	return /^(([A-Za-z]){2,15})/.test(lastname);
}

function isUsername(username){
	return /^([a-z0-9_\-\.\@\#]{8})$/.test(username);
}

function isPassword(password){
	return /^(([A-Za-z0-9_\-\.\@\#]){8})/.test(password);
}

function isPhonenumber(phonenumber){
	return /^([\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5})$/.test(phonenumber);
}

function isRegno(regno){
	return /^(SEU_IS_[0-9]+_[A-Za-z]+_[0-9])$/.test(regno);
}












