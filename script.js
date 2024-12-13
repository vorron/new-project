//Разделим код на три части - визуализацию, модель и запуск

// 1) Здесь у нас функции отвечающие за рендеринг (визуализацию данных на страничке)
function createTaskView(task) {
  const li = document.createElement("li");
  li.setAttribute("id", task.id);

  const span = document.createElement("span");
  span.textContent = `${task.label}`;
  li.appendChild(span);

  const delButton = document.createElement("button");
  delButton.innerText = "Удалить";
  li.appendChild(delButton);
  delButton.addEventListener("click", () => delTask(+li.getAttribute("id")));

  const performButton = document.createElement("button");
  performButton.innerText = "Вып";
  li.appendChild(performButton);
  performButton.addEventListener("click", () => testToggleDone(+li.getAttribute("id")));

  return li;
}

function renderTask(task) {
  const taskView = document.getElementById(task.id);
  const span = taskView.querySelector("span");
  span.textContent = `${task.label}`;
  if (span.classList.contains("done") !== task.isDone) span.classList.toggle("done");
}

function renderTaskList(data) {
  const taskListView = document.getElementById("task-list");
  const viewIdList = new Set([...taskListView.children].map((e) => +e.getAttribute("id")));
  const dataIdList = new Set(data.map((e) => e.id));

  const forDelete = viewIdList.difference(dataIdList);
  const forAdd = dataIdList.difference(viewIdList);

  [...forDelete].forEach((e) => document.getElementById(e).remove());

  for (id of [...forAdd]) {
    const task = data.find((e) => e.id === id);
    const taskView = createTaskView(task, taskListView);
    taskListView.appendChild(taskView);
    renderTask(task);
  }
}

function renderPage() {
  const button = document.getElementById("btn-add");
  const input = document.getElementById("input-task");
  button.addEventListener("click", () => {
    addTask(input.value);
  });
}

// 2) Здесь у нас модель - данные и функции отвечающие за их обработку. Нет ни какого html-ла!
const data = [
  { id: 7, label: "Изучить JS", isDone: false },
  { id: 54, label: "Почистить клавиатуру", isDone: true },
  { id: 58, label: "Купить батарейки", isDone: false },
];

function addTask(value) {
  const newId = data.reduce((a, c) => (c.id > a ? c.id : a), 0) + 1;
  const newTask = { id: newId, label: value, isDone: false };
  data.push(newTask);
  renderTaskList(data);
}

function delTask(id) {
  const index = data.findIndex((e) => e.id === id);
  data.splice(index, 1);
  renderTaskList(data);
}

function testToggleDone(id) {
  const task = data.find((e) => e.id == id);
  task.isDone = !task.isDone;
  renderTask(task);
}

//Запуск программы
renderPage();
renderTaskList(data);
