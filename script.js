// JavaScript per validimin e formes
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Parandalon dergimin e formes derisa te kalojme validimin

    // Merrni vlerat e fushave
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formMessage = document.getElementById("formMessage");

    // Kontrollo nese fushat jane plotesuar
    if (name && email && message) {
        // Kontrollo nese emaili eshte i vlefshem
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailRegex.test(email)) {
            formMessage.style.color = "green";
            formMessage.textContent = "Message sent successfully!";
            // Ketu mund te dergoni formen permes AJAX ose te kryeni nje veprim tjeter
        } else {
            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email address.";
        }
    } else {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required.";
    }
});

