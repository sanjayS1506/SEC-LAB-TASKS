 function validatePassword() {
            let password = document.getElementById("password").value;
            let passwordResult = document.getElementById("passwordResult");

            let lengthCheck = password.length >= 8;
            let upperCheck = /[A-Z]/.test(password);
            let numberCheck = /\d/.test(password);

            if (!lengthCheck) {
                passwordResult.textContent = "Password must be at least 8 characters long.";
                passwordResult.className = "invalid";
            } 
            else if (!upperCheck) {
                passwordResult.textContent = "Password must contain at least one uppercase letter.";
                passwordResult.className = "invalid";
            } 
            else if (!numberCheck) {
                passwordResult.textContent = "Password must contain at least one number.";
                passwordResult.className = "invalid";
            } 
            else {
                passwordResult.textContent = "Password is valid.";
                passwordResult.className = "valid";
            }
        }