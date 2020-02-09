const mealsContainer = document.getElementById("meals-container");
const input = document.getElementById("meal-name");

function generateRateUrl(inputValue) {
  if (inputValue) {
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  }
}

function clearMealContainer() {
  mealsContainer.innerHTML = "Loading";
}


function hitServer(url) {
  fetch(url)
    
    .then(function(response) {
      return response.json();
    })
    
    .then(function(json) {
      
      renderMeals(json.meals);
    });
}


function renderMeals(meals) {

  mealsContainer.innerHTML = "";
  for (const meal of meals) {
    console.log(meal);
    const mealContainer = document.createElement("div");
    mealContainer.style.marginBottom = "20px";

    const mealTitle = document.createElement("h3");
    mealTitle.innerText = meal.strMeal;
    mealContainer.appendChild(mealTitle);

    const mealContent = document.createElement("p");
    mealContent.innerText = meal.strInstructions;
    mealContainer.appendChild(mealContent);

    mealsContainer.appendChild(mealContainer);
  }
}


const parentDiv = document.createElement("div");
parentDiv.id = "parentDiv";

for (let i=65; i<91; i++){
  let c = String.fromCharCode(i);
  const leter = document.createElement("div");
  leter.innerText = c;
  leter.id = c;
  leter.style.padding = "3px";
  parentDiv.appendChild(leter);
}
document.getElementsByClassName("interactions")[0].appendChild(parentDiv);

document.getElementById("parentDiv").addEventListener("click", getLeter);
function getLeter(event){
  if (event.target != event.currentTarget){
    console.log(event.target.id);
    const urlLeter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${event.target.id}`;
    hitServer(urlLeter);
  }
}

