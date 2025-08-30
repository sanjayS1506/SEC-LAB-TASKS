function generate(){
    const random = Math.round(Math.random()*100);
    console.log(random);
    document.getElementById("show").innerText = "The Ranodm number is "+random;
    
}
