      function validateName() {
            let name = document.getElementById("nameInput").value.trim();
            let result = document.getElementById("result");

            // Regex: Only letters (upper/lower) and spaces allowed
            let namePattern = /^[A-Za-z\s]+$/;

            if (name === "") {
                result.textContent = "Name cannot be empty.";
                result.className = "invalid";
            } 
            else if (!namePattern.test(name)) {
                result.textContent = "Invalid: Name can only contain letters and spaces.";
                result.className = "invalid";
            } 
            else {
                result.textContent = name + " is valid.";
                result.className = "valid";
            }
        }