//Genral way of using addEventListner 
// document.querySelector("button").addEventListener("click",handleClick());

// function handleClick()
// {
//     alert("I got clicked");
// }

//using with Anonmyous function

// document.querySelector("button").addEventListener("click",function()
// {
//     alert("I got clicked");
//     // remaining  code

// })




//adding to all the buttons using Loops
//insted of using 6 or  7 as value bcz if many buttons are later added so using class named .drum 
// to all the buttons

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        // alert("I got clicked");

        // var audio=new Audio('sounds/tom-1.mp3');
        // audio.play();




        // this keyword helps to point which button is being clicked and here changing the color 
        // of the keyword to green in color


        // this.style.color="green";

        var buttonInnerHTML=this.innerHTML;  //referst to the button which is  clicked
        // this points to button clicked and this.innerHTML points to the content of the button clicked


        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);






    });
}
//detecting key pressed from keyboard
document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});






//playing sound based on mouse click and keyboard press
function makeSound(key)
{

    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            
            break;
        case "a":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                
                break;
        
        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            
            break;
    
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;
    
        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
                
            break;
        case "l":
             var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
                
                break;
        
            
        default:console.log(key); //if amy other key is pressed just logging it in console for future reference

            break;
    }
}

function buttonAnimation(currentKey)
{
var  activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");   //adding a class called pressed for creating animation for buttons

setTimeout(function()
{
    activeButton.classList.remove("pressed")
},100);

}