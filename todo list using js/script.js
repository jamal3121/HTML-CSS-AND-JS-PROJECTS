const addBtn = document.getElementById("add-btn");
const taskContainer = document.getElementById("tasks");
const taskCount = 0;
const newTaskInput = document.querySelector("#wrapper input");
const errorCont = document.getElementById("error");
const countValue = document.querySelector(".count-value");

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 3000);
    return;
  }
  const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
  };

  const task = `
    <div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskName">${taskName}</span>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;
  taskContainer.insertAdjacentHTML("beforeend", task);

  const deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  const editButton = document.querySelectorAll(".edit");
  editButton.forEach((editbtn) => {
    editbtn.onclick = (e) => {
      let targetEle = e.target;
      if (!e.target.className == "edit") {
        targetEle = e.target.parentElement;
      }
      newTaskInput.value = targetEle.previousElementSibling?.innerText;
      targetEle.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox) => {
    checkBox.onchange = () => {
      checkBox.nextElementSibling.classList.toggle("Completed");
      if (checkBox.checked) {
        taskCount -= 1;
      } else {
        taskCount += 1;
      }
      displayCount(taskCount);
    };
  });
  taskCount += 1;
  displayCount(taskCount);
};

addBtn.addEventListener("click", addTask);

    