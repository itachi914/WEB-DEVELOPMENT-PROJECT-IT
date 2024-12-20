// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
            
            // Create or update error message
            let errorMsg = input.nextElementSibling;
            if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                errorMsg = document.createElement('div');
                errorMsg.classList.add('error-message');
                input.parentNode.insertBefore(errorMsg, input.nextSibling);
            }
            errorMsg.textContent = 'This field is required';
            errorMsg.style.color = 'red';
            errorMsg.style.fontSize = '0.8rem';
            errorMsg.style.marginTop = '0.3rem';
        } else {
            input.style.borderColor = '#ddd';
            const errorMsg = input.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('error-message')) {
                errorMsg.remove();
            }
        }
    });

    return isValid;
}

// Subscribe form handler
function handleSubscribe(event) {
    event.preventDefault();
    if (validateForm('subscribeForm')) {
        // Show success message
        const message = document.createElement('div');
        message.textContent = 'Thank you for subscribing!';
        message.style.color = 'green';
        message.style.padding = '1rem';
        message.style.textAlign = 'center';
        document.getElementById('subscribeForm').appendChild(message);
        
        // Reset form
        setTimeout(() => {
            document.getElementById('subscribeForm').reset();
            message.remove();
        }, 3000);
    }
}

// Contact form handler
function handleContact(event) {
    event.preventDefault();
    if (validateForm('contactForm')) {
        // Show success message
        const message = document.createElement('div');
        message.textContent = 'Message sent successfully!';
        message.style.color = 'green';
        message.style.padding = '1rem';
        message.style.textAlign = 'center';
        document.getElementById('contactForm').appendChild(message);
        
        // Reset form
        setTimeout(() => {
            document.getElementById('contactForm').reset();
            message.remove();
        }, 3000);
    }
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('darkTheme') === 'true';
    if (isDark) {
        document.body.classList.add('dark-theme');
    }
});