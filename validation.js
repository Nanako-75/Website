document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        let valid = true;
        const errorDiv = document.getElementById('form-error');
        errorDiv.textContent = ""; // Clear previous error

        function showWarn(id, message) {
            document.getElementById(id).textContent = message;
        }
        function clearWarn(id) {
            document.getElementById(id).textContent = "";
        }

        const name = document.getElementById('name');
        if (!name.value.trim()) {
            valid = false;
            name.style.borderColor = "red";
            showWarn('warn-name', 'Name is required');
        } else {
            name.style.borderColor = "#75bc91";
            clearWarn('warn-name');
        }

        const email = document.getElementById('email');
        if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            valid = false;
            email.style.borderColor = "red";
            showWarn('warn-email', 'Valid email required');
        } else {
            email.style.borderColor = "#75bc91";
            clearWarn('warn-email');
        }

        const subject = document.getElementById('subject');
        if (!subject.value.trim()) {
            valid = false;
            subject.style.borderColor = "red";
            showWarn('warn-subject', 'Subject is required');
        } else {
            subject.style.borderColor = "#75bc91";
            clearWarn('warn-subject');
        }

        const message = document.getElementById('message');
        if (!message.value.trim()) {
            valid = false;
            message.style.borderColor = "red";
            showWarn('warn-message', 'Message is required');
        } else {
            message.style.borderColor = "#75bc91";
            clearWarn('warn-message');
        }

        if (!valid) {
            e.preventDefault();
            errorDiv.textContent = "Please fill out all fields correctly.";
            errorDiv.style.color = "red";
        }
    });
});
