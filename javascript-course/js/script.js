
const todoList = JSON.parse(localStorage.getItem("ToDoList")) || [
  {
    name: "make dinner",
    dueDate: "2022-12-22"
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22"
  }
];

console.log(todoList)

function addTodoList() {
  const nameElem = document.querySelector(".js-todo-input");
  const dueDateElem = document.querySelector(".js-todo-date");

  const name = nameElem.value;
  const dueDate = dueDateElem.value;

  todoList.push({name, dueDate});
  renderTodoList();
  localStorage.setItem("ToDoList", JSON.stringify(todoList));

}


function renderTodoList() {
  const targetRenderElem = document.querySelector(".js-todo-list");
  let todoListHTML = "";

  todoList.forEach((value, index) => {
    const todoObject = value;
    const {name, dueDate} = todoObject;
    const html = `
      <p>
        <span>${name}</span> 
        <span>${dueDate}</span> 
        <button class="btn-delete" onclick="
        todoList.splice(${index}, 1);
        localStorage.setItem('ToDoList', JSON.stringify(todoList));
        renderTodoList();
        ">Delete</button>
      </p>
    `;

    todoListHTML += html;
  });

  targetRenderElem.innerHTML = todoListHTML;

}

document.addEventListener("DOMContentLoaded", (event) => {
  renderTodoList();
});
