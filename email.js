// ---

(function() {
    emailjs.init("TwBKviKOuf3c89XDV");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

    var contactParams = {
        from_name: fullName,
        from_email: userEmail,
        message: userMessage
    };

    emailjs.send('service_7ke8l0y', 'template_z6e5b2n', contactParams).then(function(res) {})
}