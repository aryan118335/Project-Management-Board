let listNameInput = document.getElementById('new-list-name');
let createListBtn = document.getElementById('create-list-btn');
let listsContainer = document.getElementById('lists-container');

function createNewList() {
    let name = listNameInput.value;

    
    if (name.trim() === "") {
        return;
    }

    let card = document.createElement('div');
    card.className = 'todo-list-card';

  
    let header = document.createElement('h3');
    header.innerText = name;

    let closeBtn = document.createElement('button');
    closeBtn.innerText = '×';
    closeBtn.className = 'delete-list-btn';

    closeBtn.onclick = function () {
        card.remove();
    }

    header.appendChild(closeBtn);
    card.appendChild(header);

   
    let inputDiv = document.createElement('div');
    inputDiv.className = 'input-group';

    let taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Add a task...';

    let addTaskBtn = document.createElement('button');
    addTaskBtn.innerText = '+';

    inputDiv.appendChild(taskInput);
    inputDiv.appendChild(addTaskBtn);
    card.appendChild(inputDiv);


    let list = document.createElement('ul');
    card.appendChild(list);

   
    function addTask() {
        let text = taskInput.value;
        if (text.trim() === "") {
            return;
        }

        let item = document.createElement('li');

        let span = document.createElement('span');
        span.innerText = text;

        let delBtn = document.createElement('button');
        delBtn.innerText = '×';
        delBtn.className = 'delete-btn';

        delBtn.onclick = function () {
            item.remove();
        }

        item.appendChild(span);
        item.appendChild(delBtn);
        list.appendChild(item);

        taskInput.value = "";
    }

    addTaskBtn.onclick = addTask;

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    listsContainer.appendChild(card);
    listNameInput.value = "";
}

createListBtn.onclick = createNewList;

listNameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        createNewList();
    }
});