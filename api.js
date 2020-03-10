const url = "https://www.themealdb.com/api/json/v1/1/";

const getByName = (event) => {
  const letters = document.getElementById("input").value;

  fetch(`${url}search.php?s=${letters}`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      if (checkMealsData(body.meals))
        renderMeals(body.meals, true);
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
};

function getByLetter(event) {
  fetch(`${url}search.php?f=${event.target.id}`)
    .then(function (response) {
      return response.json();
    })
    .then((body) => {
      if (checkMealsData(body.meals))
        renderMeals(body.meals, true);
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function getByFlag(event) {
  fetch(`${url}filter.php?a=${event.target.id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (body) {
      clearMealContainer();
      if (checkMealsData(body.meals))
        for (let meal of body.meals) {
          fetch(`${url}lookup.php?i=${meal.idMeal}`)
            .then(function (response) {
              return response.json();
            })
            .then(function (body) {
              renderMeals(body.meals, false);
            })
        }
    });
}

const checkMealsData = (meals) => {
  if (meals === null || meals.size === 0) {
    let mealsContainer = document.querySelector("#meals-container");
    mealsContainer.innerHTML = "<div class='row justify-content-center'><div class='m-6'>No Meals for selected letter</div></div>";
    return false;
  }
  return true
};
