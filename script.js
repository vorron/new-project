const buttonsCollection= document.getElementsByClassName('btn-perform');
for (let i = 0; i < buttonsCollection.length; i++){
    let button = buttonsCollection[i];
    button.addEventListener('click', function(){
        alert('Исполнено')
    });

    

}
