document.addEventListener('DOMContentLoaded', function() {
    let pw1 = document.querySelector("#pw1");
    let pw2 = document.querySelector("#pw2");

    function checkPasswords() {
        if (pw1.value === pw2.value) {
            pw2.style.borderColor = "green"; // Change border color to indicate match
            pw1.style.borderColor = "green";
        } else {
            pw2.style.borderColor = "red"; 
            pw1.style.borderColor = "red"; 
        }
    }

    // Add input event listeners to both password fields
    pw1.addEventListener('input', checkPasswords);
    pw2.addEventListener('input', checkPasswords);
});
