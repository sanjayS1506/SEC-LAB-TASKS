function generate(){
    const user = parseFloat(document.getElementById("userInput").value);
    const random = Math.round(Math.random()*100);
    if(user == random){
        document.getElementById("shows").innerText ="your are corrected !!!!!"

    }
    else if(user < random){
        document.getElementById("shows").innerText = " Too low !!!!!"

    }
    else{
         document.getElementById("shows").innerText = " Too high!!!"
        
    }
    
}
