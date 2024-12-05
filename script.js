// Копка Вып
const buttonsCollection= document.getElementsByClassName('btn-perform');
for (let i = 0; i < buttonsCollection.length; i++){
    let button = buttonsCollection[i];
    button.addEventListener('click', toggleClass)
        function toggleClass(event){
            const parentEl = event.target.closest('li');
            const targetSpan = parentEl.querySelector('span');
            if (targetSpan){
                targetSpan.classList.toggle('done');
            }
        }
}
//Кнопка del
const buttonsCollectionDel= document.getElementsByClassName('btn-del');
for (let i = 0; i < buttonsCollectionDel.length; i++){
    let button = buttonsCollectionDel[i];
    button.addEventListener('click', delTask)
        function delTask(event){
            const delTaskIn = event.target.closest('li')
            if (delTask){
                delTaskIn.remove()
            }
        }
}
//Кнопка добавления задачи
const form= document.getElementById('add-task-form');
const button= document.getElementById('btn-add');
button.addEventListener('click', function(event){
    event.preventDefault()
    alert('временно присвоил айди кнопке')
})

