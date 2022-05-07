
var colors = generatecolors(6);
var squares= document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
 
resetButton.addEventListener("click", function(){
    colors = generatecolors(6);
    pickedcolor = pickcolor();

   colordisplay.textContent= pickedcolor;
   for(var i=0;i< squares.length;i++){
    //add colors to the squares
    squares[i].style.background= colors[i]; 
   }
     h1.style.background=" #232323" ;
})
colordisplay.textContent=pickedcolor;
for(var i=0;i< squares.length;i++){
    //add colors to the squares
    squares[i].style.background= colors[i]; 

    //add click listeners to the squares
    squares[i].addEventListener("click",function(){
         
        var clickedcolor = this.style.background;
        if(clickedcolor === pickedcolor){
            messagedisplay.textContent= " Correct";
            changecolors(clickedcolor);
            h1.style.background = clickedcolor;
            resetButton.textContent="Play Again?";
        }
        else{
            this.style.background = "  #232323 ";
            messagedisplay.textContent= " Try Again";
        }
     });
}

function changecolors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generatecolors(num){
    //make an array 
    var arr=[];
    //add randomn numbers to the array
    for(i=0;i<num;i++){
       arr.push(randomcolors());
    }
    //return array
    return arr;
}

function randomcolors(){
    //picking a random color from 0 to 256; 
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}