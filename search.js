const mealsContainer = document.getElementById("meals-container");

const input = document.getElementById("meal-name");

function generateRateUrl(inputValue) {
    if (inputValue) {
        return `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    }
}

function clearMealContainer() {
    mealsContainer.innerHTML = "";
}

function renderMeals(meals, clean = true) {
    if (clean) {
        mealsContainer.innerHTML = "";
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
}


const parentDiv = document.createElement("div");
parentDiv.id = "parentDiv";

for (let i = 65; i < 91; i++) {
    let c = String.fromCharCode(i);
    const letter = document.createElement("div");
    letter.innerText = c;
    letter.id = c;
    letter.style.padding = "3px";
    parentDiv.appendChild(letter);
}
document.getElementsByClassName("interactions")[0].appendChild(parentDiv);

document.getElementById("parentDiv").addEventListener("click", getLetter);

function getLetter(event) {
    if (event.target !== event.currentTarget) {
        console.log(event.target.id);
        const urlLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${event.target.id}`;
        hitSServer(urlLetter);
    }
}
document.getElementById("btn").addEventListener("click", function () {

    const searchValue = document.getElementById("input").value;

    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    hitSServer(searchUrl);

});

function hitSServer(url) {
    fetch(url)

        .then(function (response) {
            return response.json();
        })

        .then(function (json) {
            renderMeals(json.meals);
        });
}