async function food() {
  // use updated country when fetching
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
  );
  let obj = await response.json();
  let foods = obj.meals;

  // clear old results
  container.innerHTML = "";

  for (let food of foods) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");

    div.className = "card bg-green-200 shadow-sm ";
    img.className = "image";
    h2.className = "title";

    if (food.strMealThumb) {
      img.src = food.strMealThumb;
    }
    if (food.strMeal) {
      h2.textContent = food.strMeal;
    }

    div.appendChild(img);
    div.appendChild(h2);
    container.appendChild(div);
  }
}

let country = "";
let container = document.querySelector(".container");
let input = document.querySelector(".input");
let button = document.querySelector(".btn");

button.addEventListener("click", () => {
  country = input.value.trim();
  if (country) {
    food();
  }
});
