
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const username = (form.username.value).trim();   
        const isValid = true;
        const messages = [];
    validateForm = () => {
        const email = (form.email.value).trim();
        const password = (form.password.value).trim();
        if (username.length < 3) {
            messages.push('Username must be at least 3 characters long.');
            isValid = false;
        }
        if (!email.includes('@') || !email.includes('.')) {
            messages.push('Email must be valid.');
           isValid = false;
        }
        if (password.length < 8) {
            messages.push('Password must be at least 6 characters long.');
            isValid = false;
        }
        return true;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        feedbackDiv.style.display = 'block';
        const checkForm = validateForm();
        if (!checkForm ) {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            form.reset();
           
        }
        else{
             feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            form.submit();
        }
    });
});