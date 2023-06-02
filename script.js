function addTask() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    if (title === "" || description === "") {
      alert("Please enter a title and a description for the task.");
      return;
    }

    var taskItem = document.createElement("li");
    taskItem.innerHTML =
      '<span class="title" >' +
      title +
      '</span> <br>' + '<span class="task-description">' +
      description +
      '</span>'  + '<button class="delete-button" onclick="removeTask(this)">Delete</button>';
      

    document.getElementById("task-list").appendChild(taskItem);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }

  function removeTask(button) {
    var listItem = button.parentNode;
    var taskList = document.getElementById("task-list");
    taskList.removeChild(listItem);
  }