let form = document.getElementById('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = documents.getElementById('lname');
let password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})
function checkInputs() {
    let fnameValue = fname.value.trim();
    
    let lnameValue = lname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    
    if(fnameValue ==='') {
        setErrorFor(fname, 'fill in with firstname');
    } 
    else {
        setSuccessFor(fname);
    } 
    if(lnameValue ==='') {
        setErrorFor(lname, 'fill in with lastname');
    }
    else {
        setErrorFor(lname);
    }
    if(emailValue ==='') {
        setErrorFor(email, 'fill in with email');
    }
    else {
        setErrorFor(email);
    }
    if(passwordValue ==='') {
        setErrorFor(password, 'fill in with password');
    }
    else {
        setErrorFor(password);
    }
}
function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');

    small.innerText = message;

    formControl.clasName = 'form-cnt error';
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-cnt';
}