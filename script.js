document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Format WhatsApp message
    let whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // WhatsApp URL with your phone number and prefilled message
    let whatsappURL = `https://wa.me/923134264461?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
});
