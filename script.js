const passwordInput = document.getElementById('pass');
const passwordConfirmInput = document.getElementById('pass-confirm');

passwordConfirmInput.addEventListener('change', comparePasswords);
passwordInput.addEventListener('change', comparePasswords);

function comparePasswords() {
    if(passwordInput.value !== passwordConfirmInput.value || passwordInput.value ==='') {
        passwordInput.classList.add('invalid');
        passwordConfirmInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
        passwordConfirmInput.classList.remove('valid');
        passwordInput.setCustomValidity("Password must match");
        return;
    }     
    passwordInput.setCustomValidity("");
    passwordInput.classList.remove('invalid');
    passwordConfirmInput.classList.remove('invalid');
    passwordInput.classList.add('valid');
    passwordConfirmInput.classList.add('valid');
}