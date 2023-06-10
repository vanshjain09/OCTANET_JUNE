// Get the input field and task list
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add a task to the list
function addTask() {
  var taskText = taskInput.value;

  if (taskText.trim() !== "") {
    var taskItem = document.createElement("li");
    taskItem.innerHTML = '<span class="task">' + taskText + '</span> <button onclick="deleteTask(this)">Delete</button> <button onclick="prioritizeTask(this)">Prioritize</button>';
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Delete a task from the list
function deleteTask(taskElement) {
  var listItem = taskElement.parentNode;
  listItem.parentNode.removeChild(listItem);
}

// Prioritize a task
function prioritizeTask(taskElement) {
  var listItem = taskElement.parentNode;
  listItem.classList.toggle("priority");
}
