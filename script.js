//(тестовые задачи)
const testRenderTaskList= document.getElementById('task-list')
const data=[
    {label:'Изучить JS'},
    {label:'Почистить клавиатуру'},
    {label:'Купить батарейки'},
];

for (const item of data){
    const li= document.createElement('li');
    const span= document.createElement('span');
        span.textContent= `${item.label}`;
    li.appendChild(span);
    testRenderTaskList.appendChild(li);
    
    const testDelButton = document.createElement('button');
    testDelButton.innerText = 'Удалить';
    li.appendChild(testDelButton);
    testDelButton.addEventListener('click',delTestTask);
    
    const testPerformButton = document.createElement('button');
    testPerformButton.innerText = 'Вып';
    li.appendChild(testPerformButton);
    testPerformButton.addEventListener('click', testToggleDone);
};

function delTestTask(event) {
    const taskItem = event.target.closest('li'); 
    if (taskItem) {
    taskItem.remove();
    }
};
function testToggleDone(event) {
    const taskItem = event.target.closest('li'); 
    const targetSpan = taskItem.querySelector('span');
    if (targetSpan) {
    targetSpan.classList.toggle('done');
    }
};
//(/тестовые задачи)
//(основыне функции)


//(/основные функции)
