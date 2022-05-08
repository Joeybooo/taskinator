var formE1 = document.querySelector("#task-form")
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name'").value;
    
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    //create div to hold task info and add to list item
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>"
    
    listItemE1.textContent = (taskInfoEl);

    // add entire list item to list
    tasksToDoE1.appendChild(listItemE1);
    };
 
formE1.addEventListener("click", createTaskHandler) 
