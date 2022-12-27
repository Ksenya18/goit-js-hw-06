 const loginFormEl = document.querySelector('.login-form');

 loginFormEl.addEventListener("submit", (event) => {
   event.preventDefault();

  const email = event.currentTarget.elements.email;
   const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
     return alert`Всі поля повинні бути заповнені`;
  }

  console.log({ email: email.value, password: password.value });

  loginFormEl.reset();
 });

