document.addEventListener('DOMContentLoaded', () => {
    const fnameInput = document.getElementById('firstname');
    const lnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const countryInput = document.getElementById('country');
    const zipInput = document.getElementById('zip-code');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');

    inputs = [fnameInput, lnameInput, emailInput, phoneInput, countryInput, zipInput]

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (!input.checkValidity()) {
                input.reportValidity();
            }
        });
    });

    passwordInput.addEventListener('blur', () => {
        if (!passwordInput.checkValidity()) {
            passwordInput.reportValidity();
        }
    });

    confirmPasswordInput.addEventListener('blur', () => {
        if (!passwordInput.checkValidity()) {
            passwordInput.reportValidity();
        }
    });

    document.getElementById('signup-form').addEventListener('submit', (event) => {
        event.preventDefault();
    
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmpassword').value;
    
        if (password === confirmPassword) {
    
            console.log('Passwords match!');
            document.getElementById('signup-form').submit();
    
        } else {
            alert('Passwords do not match');
        }
    })
});



