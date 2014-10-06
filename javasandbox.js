var player1 = {name: "player1", marker: "X"};
var player2 = {name: "player2", marker: "O"};
// setup the variable for the players, as an object

var addClickHandler = function(){
  console.log("The Game is starting!!");
  alert("Let's get ready to TIC TAC TOEEEEE!!!");

  var boxes = document.querySelectorAll(".stuff");
  var turn = true;

  for (var i = 0; i < boxes.length; i++) {
    boxAtIndex = boxes[i];
    boxAtIndex.addEventListener("click", function (event) {
      if(this.innerHTML) {
        alert("NO! What are you doing?? You can't click there!!");
      }
      else {
        if (turn) {
          this.innerHTML = player1.marker;
          this.setAttribute("class", "xturn");
          turn = !turn;
        }
        else {
          this.innerHTML = player2.marker;
          this.setAttribute("class", "oturn");         
          turn = !turn;
        }
      }

    });

  }
};

// turn = !turn toggles to false, so then moves onto then next statement

var initialize = function() {
  document.querySelector(".reset").addEventListener("click", resetButton);
};

var byeBye = document.querySelectorAll(".stuff");

var resetButton = function () {
    for (var i = 0; i < byeBye.length; i++){
      byeBye[i].innerHTML = "";
      byeBye[i].setAttribute("class", "stuff");
    }
};


window.onload = addClickHandler();
window.onload = initialize();

