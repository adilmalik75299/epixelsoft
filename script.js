function validateForm() {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if phone contains only numbers
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain only numbers.");
        return false;
    }

    // Check if email is valid

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation (not a string check, but you can add your criteria)
    if (password.length < 6) { // Example: at least 6 characters
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // If all validations pass
    return true;
}



document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
        first_name: document.getElementById('name').value,
        last_name:document.getElementById("last-name").value,
        phone_number: Number(document.getElementById('phone').value),
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    // Log form data in the console as an object.
    console.log(formData);

    document.getElementById('Form').reset();
});

// hamburger
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

