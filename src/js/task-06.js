 const validationInputEl = document.querySelector('#validation-input')
 const lengthEl = Number(validationInputEl.getAttribute("data-length"));

validationInputEl.addEventListener("blur", (event) => {
  if (event.target.value.length == lengthEl) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
});

