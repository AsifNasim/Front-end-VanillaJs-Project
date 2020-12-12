// taking out all the required dom elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show Error message 

function showError(input, message){
    // accessing class of the form tag because it is its parent class
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

// show success message
function showSuccess(input, message){
    // accessing class of the form tag because it is its parent class
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// check email is valid
function isValidEmail(email){
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // it will return boolean value according to the result it get 
    return re.test(String(email).toLowerCase());
   
}
// Event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    

// validating username
    if(username.value ===''){
        showError(username, 'username is required');
    }
    else{
        showSuccess(username);
    }
// validating email
    if(email.value ===''){
        showError(email, 'email is required');
    }
    else if(! isValidEmail(email.value)){
        showError(email, 'Invalid email');
    }
    else{
        showSuccess(email);
    }

    // validating password
    if(password.value ===''){
        showError(password, 'password is required');
    }
    else{
        showSuccess(password);
    }

    // validating password matcher
    if(password2.value ===''){
        showError(password2, 'password 2 is required');
    }
    else{
        showSuccess(password2);
    }
});