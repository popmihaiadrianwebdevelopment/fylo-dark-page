const form =document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var emailValue = email.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailValue === ''){
        errorFunc(email, 'Email cannot be empty')
      }else if (!emailValue.match(pattern)){
        errorFunc(email, 'Email is not valid')
      }
      else {
        successFunc(email)
      }
})

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
}

function successFunc (req) {
    req.className += 'success';
}