// Step 1: Grab DOM elements
const  input= document.getElementBYId("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list"); 

// Step 2: Add Event Listener to the Button
addBtn.addEventListener("click" , () =>{
    const taskText = input.value.trim();
    
    if( taskText ===" ") {
        // step 3: Create new DOM elements
        const li = document.createElement("li");
        li.textContent = taskText;

        // S
    }
})