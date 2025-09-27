let btn = document.querySelector(".btn");
let punchline = document.querySelector(".punchline");
let setup = document.querySelector(".setup");
let timer = document.querySelector(".timer");

async function getText() {
  let data = await fetch("https://official-joke-api.appspot.com/random_joke");
  let joke = await data.json();
  console.log(joke);
  setup.textContent = joke.setup;
  punchline.textContent = joke.punchline;
}

getText();
let totalSec = 60;
setInterval(() => {
  totalSec -= 1;
  // convert number to string and pad with 0 if needed
  let seconds = totalSec.toString().padStart(2, "0");
  timer.textContent = `00:${seconds}`;
  if (totalSec <= 0) {
    totalSec = 60;
    getText();
  }
}, 1000);

btn.addEventListener("click", () => {
  getText();
  totalSec = 61;
});
