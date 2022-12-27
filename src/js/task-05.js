const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', event => {
    console.log(nameOutputEl.textContent);
    
    if (nameInputEl.value === '') {
    nameOutputEl.textContent = 'Anonymous';
     return;
   }

nameOutputEl.textContent = nameInputEl.value;
 });