
// // Si contesta que se llama eric, entonces lo invitamos a que suba!
// if (choosenContestan == "eric")
// alert ("eric, come here");

// // si sucede que una cosa entonces no va a suceder la otra.
// if (chosencase == "A")
//     OpenCase ("A");
//     else
//     OpenCase ("B");    

// // toma de desiciones
// if (desicion == 1)
//     curScene =2;
//     else
//     curScene =3;

// document.getElementById("sceneimg").src = "scene" + curScene + ".png";
// alert(message);


// // un compound statement te permite hacer varias acciones en mas de un IF/ELSElineas de codigos, pero tenes 
// //que rodearlas de unos {}

// if (chosenDoor =="A") {
//     prize == "donuts";
//     alert("you won a box full of donuts"); 
// } else {
//     prize == "petRock";
//     alert("you won a pet rock!!!!");
// }

// if (desicion == 1) {
//     curScene = 2;
//     message("little house in the woods");
// } else {
//     curScene = 3;
//     message("bridge overlooking stream");
// }
    

// aca comenzamos a utilzar el if y el else if para determinar en que momento debemos utilizar ambos

if (curScene == 0){
        curScene = 1;
        message("welcome to the journey begins at the fork in the road");
}
     else if(curScene ==1){
        curScene = 2;
        message("you have arrived at the cuttle title house in the woods");
} 
    else {
        curScene = 3;
        message("you are standing on the bridge overlooking a peaceful stream");
}
    
    
function changeScene (option) {
    var message="";
    if (curScene == 0){
        curScene = 1;
        message("welcome to the journey begins at the fork in the road");
        }    
        else if (curScene ==3) {
            if (option == 1){
                curScene = 6;
                message ("Sorry, a troll lives on the other side of the bridge and you"
                         + "just become his lunch");
        }
            else {
                curScene = 7;
                message = ("your stare is interrupted by the arrival of a huge troll");
        }
    }
        else if (curScene == 4){
            if (option ==1){
                curScene = 8;
            }
            else {
                curScene = 5;
                message = "sorry, you become part of the witch's stew";
            }
        }
      if (curScene != 6)
        alert ("thanfully, you havent been eating by a troll");  
    } 
    document.getElementById(sceneimg).src = "scene" + curScene + ".png";
    alert(message);
    
    
    // otro ejercicio del libro
var quote = "";

if (a !=10)
    quote += "Some guy";
else
    quote += "I";
if (b == (a *3)){
    if (c <(b/6))
    quote += "dont car for it";
    else if (c>(b/5))
    quote += "cant remember";
    else 
    quote += "love";
}
else {
    quote += "really hates";
}
if (!d){
    quote += "sticky figure";
}
else {
    quote += "rock, paper, scissors";
}
alert(quote + "adventure");

//  switch case

switch(chosencase){
    case "A":
        OpenCase ("A");
        break;
    case "B":
        OpenCase ("B");
        break;
    case "C":
        OpenCase ("C");
        break;
    case "D":
        OpenCase ("D");
        break;
    case "E":
        OpenCase ("E");
        break;
    }



    // convertir curScene en Switch
    function changeScene (option) {
        var message="";
        if (curScene == 0){
            curScene = 1;
            message("welcome to the journey begins at the fork in the road");
            }    
            else if (curScene ==3) {
                if (option == 1){
                    curScene = 6;
                    message ("Sorry, a troll lives on the other side of the bridge and you"
                             + "just become his lunch");
            }
                else {
                    curScene = 7;
                    message = ("your stare is interrupted by the arrival of a huge troll");
            }
        }
            else if (curScene == 4){
                if (option ==1){
                    curScene = 8;
                }
                else {
                    curScene = 5;
                    message = "sorry, you become part of the witch's stew";
                }
            }
          if (curScene != 6)
            alert ("thanfully, you havent been eating by a troll");  
        } 
switch (changeScene) {
    case  0:  
    curScene = 1;
    message = "your journey begin at a fork in the road";
    break;
    case 1:
        if (desicion == 1){
            curScene = 2;
            message = "you have arrived at a cute little house in the woods";
        }
        else {
            curScene = 3;
            message = "you are standing on the bridge overlooking a peaceful stream";
        }
        break;
        default : "";
    }    

// blucle for

// for (var x = 0; x<37; x++)
//     takestep ();

// for (var riverPlate = 0; riverPlate < 3 ; riverPlate++)
//        takestep();
       
       
// for (init ; test ; update)
// action ; 

// // // proyecto finish the code that dirst prompts the user to enter a great number than 0, and then uses that number
// //as the starting number for a for loop that perfoms an old movie reel countdown (4,3,2,1, film). also make sure to validate
// //that the number is really greater than 0 before performing the countdown.

// var count = prompt ("enter one number greater than 0.", "10");
// if (count > 0) {
//     for(var x = count; x > 0 ; x--)
//     alert("starting in ..." + x);
//     alert("rollfilm");
// }
// else {
//     alert("your number is incorrect")
// }

// var seat = "";
// if (seat){
//     for(var seat = x; x>=3; x)
//     alert("you have your seats");
// } else{
//     alert("there no seats avaliable here")
// }
//  */

// //arrays

    



     

     

     
  
     
    




        




    

