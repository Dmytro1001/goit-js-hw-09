const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let colorId;


function changeBackground(color) {
   body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
	btnStart.setAttribute("disabled", "disabled");
  btnStop.removeAttribute("disabled");

colorId = setInterval(() => {
	changeBackground(getRandomHexColor());
}, 1000);
});

btnStop.addEventListener('click', () => {
	btnStop.setAttribute("disabled", "disabled");
btnStart.removeAttribute("disabled");

clearInterval(colorId);
});






// btnStart.addEventListener('click', () => {
//     console.log('Hello');
//     let colorBody;
//      colorBody = setInterval(() => {getRandomHexColor()
// }, 1000);

// body.style.backgroundColor = colorBody;

//   body.style.backgroundColor = setInterval(() => {getRandomHexColor()}, 1000);

//   function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//   .toString(16)}`;
// };
// });



//   let color = getRandomHexColor();

//   body.style.backgroundColor = color;

//   function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//   .toString(16)}`;
// };
// })

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }