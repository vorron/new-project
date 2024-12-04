const buttonsCollection= document.getElementsByClassName('btn-perform');
for (let i = 0; i < buttonsCollection.length; i++){
    let button = buttonsCollection[i];
    button.addEventListener('click', function toggleClass(){
        const searchClass = toggleClass.target.closest('li');
        const targetClass = searchClass.target.closest('span');
        if (targetClass){
            targetClass.classList.toggle('done')
        }
    })


    

}
