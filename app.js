const clearMealContainer = () => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";
};

const renderMeals = (meals, clean = true) => {
  const mealsContainer = document.getElementById("meals-container");

  if (clean) {
    clearMealContainer()
  }
  for (const meal of meals) {
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
};
