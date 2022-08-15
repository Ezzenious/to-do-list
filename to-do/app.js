const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");

addTask.addEventListener("click", () => {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;

  task.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkBtn.classList.add("check-btn");
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.classList.add("delete-btn");
  task.appendChild(deleteBtn);
});
