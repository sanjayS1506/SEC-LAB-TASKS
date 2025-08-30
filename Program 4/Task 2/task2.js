  function validateEmail() {
            let email = document.getElementById("email").value.trim();
            let emailResult = document.getElementById("emailResult");

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailPattern.test(email)) {
                emailResult.textContent = email + " is valid.";
                emailResult.className = "valid";
            } else {
                emailResult.textContent = "Invalid email format.";
                emailResult.className = "invalid";
            }
        }