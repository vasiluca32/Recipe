const clearMealContainer = () => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";


};

const renderMeals = (meals, clean = true) => {

  const mealsContainer = document.getElementById("meals-container");
  if (clean) {
    clearMealContainer();
  }
  // render meals with navigation buttons
  renderOneMeal(meals[0], mealsContainer);
  const navigation = document.getElementsByClassName("meal-navigation")[0];
  if (navigation) {
    navigation.parentNode.removeChild(navigation);  }
  addMealsNavigation(meals, mealsContainer);

};

function renderOneMeal(meal, mealsContainer) {
  clearMealContainer();
  const mealContainer = document.createElement("div");
  mealContainer.id = "mealContainer";
  mealContainer.style.marginBottom = "20px";

  const mealName = document.createElement("h2");
  mealName.id = "mealName";
  mealName.innerText = meal.strMeal;
  mealContainer.appendChild(mealName);

  const mealImg = document.createElement("img");
  mealImg.id = "mealImg";
  mealImg.setAttribute("src", meal.strMealThumb);
  mealImg.classList.add("meal-img");
  mealContainer.appendChild(mealImg);

  const mealDesc = document.createElement("p");
  mealDesc.id = "mealDesc";
  mealDesc.innerText = meal.strInstructions;
  mealContainer.appendChild(mealDesc);
  mealsContainer.appendChild(mealContainer);
}

function addMealsNavigation(meals, mealsContainer) {

  console.log("addMealsNavigation");
  const navigation = document.createElement("div");
  navigation.classList.add("meal-navigation");

  const leftButton = document.createElement("div");
  leftButton.innerText = "<";
  leftButton.style.opacity = "0.5";

  const rightButton = document.createElement("div");
  rightButton.innerText = ">";

  navigation.appendChild(leftButton);
  navigation.appendChild(rightButton);
  let content = document.getElementsByClassName("content")[0];
  content.appendChild(navigation);
  console.log("before set navigation", mealsContainer);
  setNavigationFunctionality(meals, leftButton, rightButton, mealsContainer);
}

function setNavigationFunctionality(meals, leftButton, rightButton, mealsContainer) {
  let currentIndexMeal = 0;
  console.log("setting the functionality");
  leftButton.addEventListener("click", () => {
    if (currentIndexMeal > 0) {
      currentIndexMeal--;
      renderOneMeal(meals[currentIndexMeal], mealsContainer);
      rightButton.style.opacity = 1;
    }

    if (currentIndexMeal === 0) {
      leftButton.style.opacity = 0.5;
    }
  });

  rightButton.addEventListener("click", () => {
    if (currentIndexMeal + 1 < meals.length) {
      currentIndexMeal++;
      renderOneMeal(meals[currentIndexMeal], mealsContainer);
      leftButton.style.opacity = 1;
    }

    if (currentIndexMeal === meals.length - 1) {
      rightButton.style.opacity = 0.5;
    }
  });
}
