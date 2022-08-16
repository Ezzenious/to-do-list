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

  if (inputTask.value === "") {
    alert("Please enter task");
  } else {
    taskContainer.appendChild(task);
    inputTask.value = "";
  }

  checkBtn.addEventListener("click", () => {
    checkBtn.parentElement.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener("click", (e) => {
    let target = e.target;
    if (target === deleteBtn) {
      target.parentElement.remove();
    } else {
      target.parentElement.parentElement.remove();
    }
  });
});
