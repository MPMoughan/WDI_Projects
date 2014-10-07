var myForm = document.getElementById("myForm");
// the element id is coming from the form tag id

var list = document.getElementById("movieList");


myForm.addEventListener("submit", function (event) {

  event.preventDefault();

  var userInput = this.title.value;


  var listItem = document.createElement("li");

  // listItem.innerHTML = userInput;
  // got rid of the innerHTML

  var text = document.createTextNode(userInput);
  listItem.appendChild(text);
  list.appendChild(listItem);

  // reference list back within the the ul


  console.log("Did it happen? Yes, here is my movie..." + " " + userInput);

  this.title.value = "";
  console.log("no more :(");



  // function for delete and strike through
  // var deleted = document.removeChild(userInput.this);
  // button.addClickHandler("delete").addEventListener("clicked", deleted);

  // var done = document.setAttribute(userInput.this, "changes");
  // button.addClickHandler("done").addEventListener("clicked", done);

});






// Does this effectively allow the javascript to run functions without leaving the page?
// Use the variable "userInput" to create a list (whatever is entered in the form field)


// When do you decide if you need local or global variable?
// If I go back to tictactoe and change innerHTML to innerText, it should work just the same...
// innerHTML - can take any input from the user and render it into the page
// innerText - will function the same as innerHTML, but not render any changes
// createTextnode