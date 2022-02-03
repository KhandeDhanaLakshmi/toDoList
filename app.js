const addBtn = document.getElementsByClassName("btn")[0];

function createToDoListItem(todoName) {
    //creating list item to append to ul of todoList
    const li = document.createElement('li');
    li.classList.add("list-group-item")
    //creating TextNode with user input as text
    const taskTextNode = document.createTextNode(todoName);
    li.appendChild(taskTextNode);
    return li;
}

function createDoneButton(li) {
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('id', 'done');
    doneBtn.setAttribute('type','submit');
    doneBtn.innerHTML = "&#10003";
    doneBtn.style.color = "white";
    doneBtn.classList.add('btn');
    doneBtn.addEventListener('click',removeToDoListItem);
    return doneBtn;
}

//checks if input is already in todo list
function checkIfTaskIsUnique(event, taskName) {
    const listItems = document.getElementsByClassName("list-group-item");
    //console.log(listItems);
    for(li of listItems) {
        const existingTaskName = li.firstChild.textContent;
        //console.log(existingTaskName, taskName);
        if(existingTaskName === taskName) {
            return false;
        }
    }
    return true;
}

//adds unique todo items to list
function createTodoListItem(event) {
    let taskInput = document.getElementById("toDotask").value;
    if(!taskInput) {
        alert("Kindly Enter ToDo Item Name to Add");
        return;
    }
    if(checkIfTaskIsUnique(event, taskInput)) {
        const todolist = document.getElementById("todolist");
        //creating todo list item
        const li = createToDoListItem(taskInput);
        //creating button to each ListItem
        const doneBtn = createDoneButton(li);
        li.appendChild(doneBtn);
        todolist.appendChild(li);
        //console.log(li);
        document.getElementById('toDotask').value = "";
    }
    else {
        alert("Task Entered is in To Do List... Kindly Re-Enter");
    }
    
}

function removeToDoListItem() {
    (document.getElementById('todolist')).removeChild(this.parentElement);
}

addBtn.addEventListener('click', createTodoListItem,false);


