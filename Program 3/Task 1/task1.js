function reverse(){
    const userInput = document.getElementById("input").value;
    const sentence = userInput.split(" ")
    .map(( word)=> word.split("").reverse().join(""))
    .join(" ");

    document.getElementById("result").innerText = " The Word Reversed : " +sentence;

}