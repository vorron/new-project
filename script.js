// Копка Вып (test task)
const buttonsCollection= document.getElementsByClassName('btn-perform');
for (let i = 0; i < buttonsCollection.length; i++){
    let button = buttonsCollection[i];
    button.addEventListener('click', toggleClass);
        function toggleClass(event){
            const parentEl = event.target.closest('li');
            const targetSpan = parentEl.querySelector('span');
            if (targetSpan){
                targetSpan.classList.toggle('done');
            }
        }
}
//Кнопка del (test task)
const buttonsCollectionDel= document.getElementsByClassName('btn-del');
for (let i = 0; i < buttonsCollectionDel.length; i++){
    let button = buttonsCollectionDel[i];
    button.addEventListener('click', delTask);
        function delTask(event){
            const delTaskIn = event.target.closest('li')
            if (delTask){
                delTaskIn.remove()
            }
        }
}
// Добавление задачи + кнопки
const form = document.getElementById('add-task-form');
const button = document.getElementById('btn-add');
const taskList = document.querySelector('.task-list');

button.addEventListener('click', (event) => {
event.preventDefault();

const newTaskInput = document.getElementById('new-task');
const taskText = newTaskInput.value;

const li = document.createElement('li');
const span = document.createElement('span');
span.textContent = taskText;
li.appendChild(span);

const delButton = document.createElement('button');
delButton.innerText = 'Удалить';
li.appendChild(delButton);

const performButton = document.createElement('button');
performButton.innerText = 'Вып';
li.appendChild(performButton);

delButton.addEventListener('click', delTask);
function delTask(event) {
    const taskItem = event.target.closest('li'); 
    if (taskItem) {
    taskItem.remove();
    }
}

performButton.addEventListener('click', toggleClass);
function toggleClass(event) {
    const taskItem = event.target.closest('li'); 
    const targetSpan = taskItem.querySelector('span');
    if (targetSpan) {
    targetSpan.classList.toggle('done');
    }
}

taskList.appendChild(li);

newTaskInput.value = ''; 

})
