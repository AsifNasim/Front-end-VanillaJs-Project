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
// function isValidEmail(email){
    function checkEmail(input){
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // it will return boolean value according to the result it get 
    // return re.test(String(email).toLowerCase());

    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, "Invalid Email")
    }
   
}

// check required function

function checkRequired(inputArray){
    inputArray.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max){
    if(input.value.length < 3){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > 15){
        showError(input, `${getFieldName(input)} cannot be greater than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}


// password Matching

function matchPassword(input1, input2){
    if(input1.value === input2.value){
        showSuccess(input1);
    }
    else{
        showError(input2, "password do not match");
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
}


// Event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkRequired([username,email, password, password2]);
    
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    // checkLength(password2, 6, 25);
    checkEmail(email);
    matchPassword(password, password2);
// // getting rid of redundant code
// // validating username
//     if(username.value ===''){
//         showError(username, 'username is required');
//     }
//     else{
//         showSuccess(username);
//     }
// // validating email
//     if(email.value ===''){
//         showError(email, 'email is required');
//     }
//     else if(! isValidEmail(email.value)){
//         showError(email, 'Invalid email');
//     }
//     else{
//         showSuccess(email);
//     }

//     // validating password
//     if(password.value ===''){
//         showError(password, 'password is required');
//     }
//     else{
//         showSuccess(password);
//     }

//     // validating password matcher
//     if(password2.value ===''){
//         showError(password2, 'password 2 is required');
//     }
//     else{
//         showSuccess(password2);
//     }
});