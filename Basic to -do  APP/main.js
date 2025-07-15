
// Step 1: Grab DOM elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Step 2: Add event listener to button
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText !== "") {
    // Step 3: Create new DOM elements
    const li = document.createElement("li");
    li.textContent = taskText;

    // Step 4: Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(li); // Remove the task
    });

    li.appendChild(deleteBtn); // Add delete button to task
    todoList.appendChild(li);  // Add task to list

    input.value = ""; // Clear the input
  }
});
