const formCreate = document.getElementById("form-create");
const formEdit = document.getElementById("form-edit");
const listGroupTodo = document.getElementById("list-group-todo");
const messageCreate = document.getElementById("message-create");
const messageEdit = document.getElementById("message-edit");

const time = document.getElementById("time");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

/* time elements */
const fullDay = document.getElementById("full-day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const closeEl = document.getElementById("close");
let editItemId;
// Local Storege dan ma'lumot olish
let todos = JSON.parse(localStorage.getItem("list"))
  ? JSON.parse(localStorage.getItem("list"))
  : [];

if (todos.length) showTodos();

//local storegega ma'lumot  yuborish
function setTodos() {
  localStorage.setItem("list", JSON.stringify(todos));
}

// time
function getTime() {
  const now = new Date();
  const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const month =
    now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth();
  const year = now.getFullYear();
  const hour =
    now.getHours() < 10 ? "0" + (now.getHours() + 1) : now.getHours();
  const minute =
    now.getMinutes() < 10 ? "0" + (now.getMinutes() + 1) : now.getMinutes();
  const second =
    now.getSeconds() < 10 ? "0" + (now.getSeconds() + 1) : now.getSeconds();
  fullDay.textContent = `${date}.${month}.${year} `;
  hourEl.textContent = hour;
  minuteEl.textContent = minute;
  secondEl.textContent = second;

  return `${hour}:${minute}, ${date}.${month}.${year} `;
}
setInterval(getTime, 1000);
//show todos
function showTodos() {
  const todos = JSON.parse(localStorage.getItem("list"));
  listGroupTodo.innerHTML = "";
  todos.forEach((item, i) => {
    listGroupTodo.innerHTML += `  
        <li class="list-group-item d-flex justify-content-between ${
          item.completed == true ? "complated" : ""
        } " ondblclick="setCompleted(${i})" 
        
        >
        ${item.text}
        <div class="todo-icons">
          <span class="opacity-50 me-2">${item.time}</span>
          <img src="./img/delete.svg" onclick=(deleteTodo(${i})) alt="delete" width="25" height="25">
          <img src="./img/edit.svg" alt="edit" width="25" height="25" onclick=(editTodo(${i}))>
        </div>
      </li>`;
  });
}

// todo kiritish
formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = formCreate["input-create"].value.trim();
  formCreate.reset();
  if (todoText.length) {
    todos.push({ text: todoText, time: getTime(), completed: false });
    setTodos();
    showTodos();
  } else {
    messageCreate.textContent = "Iltimos soz kiriting";

    setTimeout(() => {
      messageCreate.textContent = "";
    }, 2500);
  }
});

// deleteToda
function deleteTodo(id) {
  const deletedTodos = todos.filter((item, i) => {
    return i !== id;
  });
  todos = deletedTodos;
  setTodos();
  showTodos();
}

//setComleted{}

function setCompleted(id) {
  const completedTodos = todos.map((item, i) => {
    if (id == i) {
      return { ...item, completed: item.completed == true ? false : true };
    } else {
      return { ...item };
    }
  });
  todos = completedTodos;
  setTodos();
  showTodos();
}
// edit form
formEdit.addEventListener("submit", (e) => {
  e.preventDefault;
  const todoText = formEdit["input-edit"].value.trim();
  formEdit.reset();
  if (todoText.length) {
    todos.splice(editItemId, 1, {
      text: todoText,
      time: getTime(),
      completed: false,
    });
    setTodos();
    showTodos();
    close();
  }
   else {
    messageEdit.textContent = "Iltimos soz kiriting";

    // setTimeout(() => {
    //   messageEdit.textContent = "";
    // }, 2500);
  }
})
overlay.addEventListener('click', close)
closeEl.addEventListener('click', close)
//editTodo
function editTodo(id) {
  open();
  editItemId = id;
}
window.addEventListener('keydown', (e)=>{
    e.keyCode == 27 ? close() : ''
})
function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
