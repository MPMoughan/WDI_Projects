var myForm = document.getElementById("taskList");
// the element id is coming from the form tag id
var list = document.getElementById("toDoList");
// variable to reference the ul

// start of the first function
myForm.addEventListener("submit", function (event) {
  var done = document.createElement("button");
  var deleted = document.createElement("button");

  event.preventDefault();

  // Text value; "this" being the value that is input into text field
  var userInput = this.task.value;
  var listItem = document.createElement("li");
  var text = document.createTextNode(userInput);

  // creation of list items
  listItem.appendChild(text);

  // creating & appending done button
  done.addEventListener("click", doneEL);
  done.appendChild(document.createTextNode("Done"));
  done.setAttribute("class", "btn btn-primary");
  listItem.appendChild(done);


  // creating & appending delete button
  deleted.addEventListener("click", deleteEL);
  deleted.appendChild(document.createTextNode("Delete"));
  deleted.setAttribute("class", "btn btn-danger");
  listItem.appendChild(deleted);

  // adding the new item created li
  list.appendChild(listItem);

  console.log("Have you finished?" + " " + userInput);

  this.task.value = "";
  // resets the text input field without reloading the page

});

// second function
var deleteEL = function(){
  var conf = confirm("Are you sure you want to delete?")
  if (conf){
  this.parentElement.remove();
  }
}

// third function
var doneEL = function(){
    if (this.innerHTML === "Done"){
      this.innerHTML = "Undo";
      this.parentElement.setAttribute("class", "complete");
    }
  // if (the text of this button says "Done"
      // change it to undo)
    else {
    this.innerHTML = "Done"
    this.parentElement.setAttribute("class", "incomplete");
    }
  // else
    // change the text of the button to Done
    // apply the class of incomplete
    // remove the class of complete
}


  // possible to align the buttons?

  // ondblclick method
  // var reDo = function() {
  //   this.innerHTML.appendChild;
  // }
  // list.addEventListener("dblclick", reDo);


// edit submitted fields with JQuery
var oriVal;
$("#toDoList").on('dblclick', 'li', function () {
    oriVal = $(this).text();
    $(this).text("");
    $("<input type='text'>").appendTo(this).focus();
});

// $("#todoList").on('focusout', 'li > input', function () {
//     var $this = $(this);
//     $this.parent().text($this.val() || oriVal);   // Use current or original val.
//     $this.remove();                               // Don't just hide, remove the element.
// });
