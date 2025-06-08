document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (username.length < 3) {
        msg.textContent = "Username must be at least 3 characters.";
    } else if (!email.includes("@")) {
        msg.textContent = "Enter a valid email address.";
    } else if (password.length < 6) {
        msg.textContent = "Password must be at least 6 characters.";
    } else {
        msg.style.color = "green";
        msg.textContent = "Registered successfully!";
   
    }
});