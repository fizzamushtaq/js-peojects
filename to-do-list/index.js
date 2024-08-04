const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkBtnEl);

  const editBtnEl = document.createElement("div");
  editBtnEl.innerHTML = `<i class="fas fa-edit"></i>`;
  liEl.appendChild(editBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  editBtnEl.addEventListener("click", () => {
    const editInputEl = document.createElement("input");
    editInputEl.type = "text";
    editInputEl.value = newTask;
    liEl.innerText = "";
    liEl.appendChild(editInputEl);

    const saveBtnEl = document.createElement("div");
    saveBtnEl.innerHTML = `<i class="fas fa-save"></i>`;
    liEl.appendChild(saveBtnEl);

    const cancelBtnEl = document.createElement("div");
    cancelBtnEl.innerHTML = `<i class="fas fa-times"></i>`;
    liEl.appendChild(cancelBtnEl);

    saveBtnEl.addEventListener("click", () => {
      newTask = editInputEl.value;
      liEl.innerText = newTask;
      liEl.appendChild(checkBtnEl);
      liEl.appendChild(editBtnEl);
      liEl.appendChild(trashBtnEl);
      updateLocalStorage();
    });

    cancelBtnEl.addEventListener("click", () => {
      liEl.innerText = newTask;
      liEl.appendChild(checkBtnEl);
      liEl.appendChild(editBtnEl);
      liEl.appendChild(trashBtnEl);
    });
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}

