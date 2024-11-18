// Load the todo list from localStorage or initialize an empty array
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Render the to-do list initially
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject; // Destructure the object

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        deleteTodo(${i});
      " class="delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name === '' || dueDate === '') {
    alert('Please fill in both fields!');
    return;
  }

  todoList.push({ name, dueDate });

  // Save the updated list to localStorage
  saveToLocalStorage();

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

function deleteTodo(index) {
  // Remove the selected item from the todo list
  todoList.splice(index, 1);

  // Save the updated list to localStorage
  saveToLocalStorage();

  renderTodoList();
}

function saveToLocalStorage() {
  // Save the todo list to localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
