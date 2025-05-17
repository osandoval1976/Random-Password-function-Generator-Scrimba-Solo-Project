const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let clickButton = document.getElementById("button")
let textRandom1 = document.getElementById("rectangle-95")
let textRandom2 = document.getElementById("rectangle-96")
let randomText1 = "";
let randomText2 = "";
let restartPassword = " ";

//the trigger button function//
clickButton.addEventListener("click", function(){
     myFunction()
     restartPasswords()

}) 
//The function to generate a random passqword//
function myFunction(){
       
        let ramdonPasword1 = Math.floor(Math.random() * characters.length + 1);
        let ramdonPasword2 = Math.floor(Math.random() * characters.length + 1);  
       for(let i=0; i <= 15; i++){
        if(ramdonPasword1 <= 15 ){
        randomText1 = Math.floor(Math.random() * characters.length + 1)
        textRandom1.textContent +=characters[randomText1]
        
   }else if(ramdonPasword2 <= 15){  
       randomText2 = Math.floor(Math.random() * characters.length + 1)
       textRandom2.textContent += characters[randomText2] 
       
        
      }else{
        textRandom1.textContent = restartPasswords();
        textRandom2.textContent = restartPasswords();
    }  
     
}

} 

//The function to restart the random password//
function restartPasswords(){
   
   console.log(restartPassword)
   return restartPassword
}