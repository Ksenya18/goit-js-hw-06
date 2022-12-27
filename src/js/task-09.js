function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const spanColor = document.querySelector('.color');
 const changeColorEl = document.querySelector('.change-color');

 changeColorEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyEl.style = `background-color: ${color}`;
  spanColor.textContent = color;
});


