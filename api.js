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
    .then(async function (body) {
      clearMealContainer();
      let mealsToRender = [];
      if (checkMealsData(body.meals))
        for (let meal of body.meals) {
          await fetch(`${url}lookup.php?i=${meal.idMeal}`)
            .then(function (response) {
              return response.json();
            })
            .then(function (body) {
              mealsToRender.push(body.meals[0]);
            })
        }
      renderMeals(mealsToRender, false);
    });
}

function getByCategory(url) {
//   console.log(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(async function (json) {
      clearMealContainer();
      let mealsToRender = [];
      for (let meal of json.meals) {
        await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            mealsToRender.push(json.meals[0]);
          })
      }
      renderMeals(mealsToRender, false);
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
