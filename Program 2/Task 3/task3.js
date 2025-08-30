 const correctNumber = 75;

        function checkGuess() {
            let userGuess = Number(document.getElementById("userNumber").value);
            let result = document.getElementById("result");

            if (userGuess > correctNumber) {
                result.textContent = "Too high! Try again.";
            } 
            else if (userGuess < correctNumber) {
                result.textContent = "Too low! Try again.";
            } 
            else if (userGuess === correctNumber) {
                result.textContent = "Correct!";
            } 
            else {
                result.textContent = "Please enter a valid number.";
            }
        }