function counter(){
    const userInput = document.getElementById("userInput").value.toLowerCase();
    let vowel = "aeiou";
    let count = 0;
    for (let char of userInput){
        if(vowel.includes(char)){
            count++;
        }
    }
    document.getElementById("result").innerText = "the count is: " +count;
}