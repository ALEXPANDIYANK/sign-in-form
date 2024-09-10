document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (signInForm.checkValidity()) {
            // Perform the sign-in action (e.g., send data to server)
            alert("Sign-In Successful");
        }

        signInForm.classList.add("was-validated");
    });
});
