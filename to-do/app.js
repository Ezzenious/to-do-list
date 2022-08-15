const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");

addTask.addEventListener("click", () => {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  
  task.appendChild(li);
});
