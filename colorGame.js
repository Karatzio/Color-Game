
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
        })
    }

    for(var i =0; i < squares.length; i++){
        //click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                messageDisplay.style.color = "blackhi";
                resetButton.textContent = "Play Again?";
                changeallSquares(clickedColor);
                h1.style.backgroundColor = clickedColor;
                //resetButton.textContent = "New Colors";
            }
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
                messageDisplay.style.color = "red";
            }
        });
    }

    reset();
}




function reset(){
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    //change square colors
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
    resetButton.textContent = "New Colors";
})



function randomColor(){ 

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateRandomColor(number){
    var arr = []
    for(var i = 0; i<number; i++){
        arr.push(randomColor())
    }
    return arr;
}

function changeallSquares(color){
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
