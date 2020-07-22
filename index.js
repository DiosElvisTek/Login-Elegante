const BtnSignup = document.querySelector('#Signup');

const BtnSignin = document.querySelector('#Signin');

const SignInBTN = document.querySelector('#SignInBTN');

const SignUpBTN = document.querySelector('#SignUpBTN');

const Column1 = document.querySelector('#Column1');

const Column2 = document.querySelector('#Column2');

const Column3 = document.querySelector('#Column3');

const Column4 = document.querySelector('#Column4');

const ItEmail = document.querySelector('#ItEmail');

const ItPassword = document.querySelector('#ItPassword');

const ItEmail2 = document.querySelector('#ItEmail2');

const ItPassword2 = document.querySelector('#ItPassword2');

Column2.classList.add('None');
Column4.classList.add('None');

BtnSignup.addEventListener('click', () => {
    Column1.classList.add('None');
    Column3.classList.add('None');
    Column2.classList.remove('None');
    Column4.classList.remove('None');
});

BtnSignin.addEventListener('click', () => {
    Column1.classList.remove('None');
    Column3.classList.remove('None');
    Column2.classList.add('None');
    Column4.classList.add('None');
});

SignInBTN.addEventListener('click', () => {
    ItEmail.classList.add('Error');
    ItPassword.classList.add('Error');
});

SignUpBTN.addEventListener('click', () => {
    ItEmail2.classList.add('Error');
    ItPassword2.classList.add('Error');
});

ItEmail.addEventListener('keyup', () => {
    ItEmail.classList.remove('Error');
    ItPassword.classList.remove('Error');
});

ItPassword.addEventListener('keyup', () => {
    ItEmail.classList.remove('Error');
    ItPassword.classList.remove('Error');
});

ItEmail2.addEventListener('keyup', () => {
    ItEmail2.classList.remove('Error');
    ItPassword2.classList.remove('Error');
});

ItPassword2.addEventListener('keyup', () => {
    ItEmail2.classList.remove('Error');
    ItPassword2.classList.remove('Error');
});