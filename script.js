const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const todoText = input.value.trim();

  if (todoText !== "") {
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = todoText;
    li.appendChild(textSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    input.value = "";
  }
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
