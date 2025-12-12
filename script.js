const listNameInput = document.getElementById("new-list-name");
const createListBtn = document.getElementById("create-list-btn");
const listsContainer = document.getElementById("lists-container");

function createList() {
  const listName = listNameInput.value.trim();
  if (listName !== "") {
    const listCard = document.createElement("div");
    listCard.className = "todo-list-card";

    const title = document.createElement("h3");
    title.textContent = listName;

    const deleteListBtn = document.createElement("button");
    deleteListBtn.textContent = "×";
    deleteListBtn.className = "delete-list-btn";
    deleteListBtn.onclick = function () {
      listsContainer.removeChild(listCard);
    };
    title.appendChild(deleteListBtn);

    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Add task...";

    const addBtn = document.createElement("button");
    addBtn.textContent = "+";

    inputGroup.appendChild(taskInput);
    inputGroup.appendChild(addBtn);

    const ul = document.createElement("ul");

    addBtn.onclick = function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () {
          ul.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        taskInput.value = "";
      }
    };

    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addBtn.click();
      }
    });

    listCard.appendChild(title);
    listCard.appendChild(inputGroup);
    listCard.appendChild(ul);

    listsContainer.appendChild(listCard);
    listNameInput.value = "";
  }
}

createListBtn.addEventListener("click", createList);

listNameInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createList();
  }
});
