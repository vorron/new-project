// Копка Вып
const buttonsCollection= document.getElementsByClassName('btn-perform');
for (let i = 0; i < buttonsCollection.length; i++){
    let button = buttonsCollection[i];
    button.addEventListener('click', toggleClass)
        function toggleClass(){
            const parentEl = this.closest('li');
            const targetSpan = parentEl.querySelector('span');
            if (targetSpan){
                targetSpan.classList.toggle('done');
            }
        }
}

