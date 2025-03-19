document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    
    if (name && email && date) {
        document.getElementById("appointment-message").textContent = `Appointment booked for ${name} on ${date}.`;
        this.reset();
    } else {
        document.getElementById("appointment-message").textContent = "Please fill out all fields.";
    }
});

document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    
    if (email) {
        document.getElementById("newsletter-message").textContent = "Thank you for subscribing!";
        this.reset();
    } else {
        document.getElementById("newsletter-message").textContent = "Please enter a valid email.";
    }
});
