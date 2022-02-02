const addBtn = document.getElementsByClassName("btn")[0];

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
        //creating list item to append to ul of todoList
        const li = document.createElement('li');
        li.classList.add("list-group-item")
        
        //creating TextNode with user input as text
        const taskTextNode = document.createTextNode(taskInput);
        li.appendChild(taskTextNode);
        
        todolist.appendChild(li);
        document.getElementById('toDotask').value = "";
    }
    else {
        alert("Task Entered is in To Do List... Kindly Re-Enter");
    }
    
}

addBtn.addEventListener('click', createTodoListItem,false);


// document.getElementById("toDotask").addEventListener('onchange', () => {
//     if(document.getElementById("toDotask").value) {
//         addBtn.setAttribute('disabled', false);
//     }
//     else {
//         addBtn.setAttribute('disabled',true);
//     }
// })
