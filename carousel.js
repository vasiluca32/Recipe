
// function for adding multiple images

// function addImages() {
//   let carouselListContainer = document.getElementById("carouselListContainer");
//   for (let country of countries) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("carousel-item");

//     const newImg = document.createElement("img");
//     newImg.classList.add("d-block");
//     newImg.src = `pictures/flags-pictures/${country}.png`;
//     newDiv.appendChild(newImg);
//     carouselListContainer.appendChild(newDiv);
//   }
//   carouselListContainer.firstElementChild.classList.add('active');
// }
// 

const countries = ['Algerian', 'American', 'Argentinian', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Norwegian', 'Portuguese', 'Russian', 'Slovakian', 'Spanish', 'Syrian', 'Thai', 'Tunisian', 'Turkish', 'Vietnamese'];
function addImages() {
  let carouselListContainer = document.querySelector(".flags-container .row");
  for (let country of countries) {
    const newButton = document.createElement("div");
    newButton.classList.add("col-xl-1");
    newButton.classList.add("col-lg-1");
    newButton.classList.add("col-md-2");
    newButton.classList.add("col-sm-3");
    newButton.classList.add("col-6");
    
    newButton.classList.add("zoom");

    newButton.addEventListener("click", getRecipeByFlag);

    const newImg = document.createElement("img");
    newImg.classList.add("d-block");
    newImg.classList.add("mx-auto");
    newImg.id = country;
    newImg.src = `pictures/flags-pictures/${country}.png`;
    newButton.appendChild(newImg);

    const newP = document.createElement("p");
    newP.innerText = country;
    newButton.appendChild(newP);

    carouselListContainer.appendChild(newButton);
  }
}

function getRecipeByFlag(event) {
  console.log(event.target.id)
  const urlFlag = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${event.target.id}`;
  hitCServer(urlFlag);
}

function hitCServer(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      clearMealContainer()
      for (let meal of json.meals) {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`;
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            renderMeals(json.meals, false);
          })
      }
    });
}

function renderFlag(meals) {
  // const section = document.querySelector("row text-center");
  const container = document.querySelector("container-fluid flags-container");
  for (const meal in meals) {
    const newDiv = document.createElement("div");
    newDiv.id = newDiv;
    container.appendChild(newDiv);

    const recipeName = document.createElement("h2");
    recipeName.id = "recipeName";
    recipeName.innerText = meal.strMeal
    newDiv.appendChild(recipeName);

    const imgRecipe = document.createElement("img");
    imgRecipe.id = "img";
    imgRecipe.setAttribute("src", meal.strMealThumb);
    newDiv.appendChild(imgRecipe);

  }
}