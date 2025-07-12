var a = document.getElementById("inputt");
var b = document.getElementById("btn");
var c = document.getElementById("guessed");
var noofguess = 3;

var randomNumber = Math.floor(Math.random()*10)+1;
if(randomNumber>5){
    randomNumber=randomNumber-5;
}

function now(){
if(inputt.value == randomNumber){
    alert("You guessed it right!"+randomNumber)
    guessed.textContent="You guessed 1000% straight!"
}
else{
   noofguess=noofguess-1;

    if(noofguess==0){
        alert("You guessed it wrong!,The generated no. is " +randomNumber)
    }
    guessed.textContent="You bro got it wrong!"
    guess.textContent = "Available guesses:"+noofguess;
}
}
