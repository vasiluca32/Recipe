//here are the click event on category image => fetch by url
document.getElementById("meat").addEventListener("click", function () {
    //multiple url's because meat can be from beef chicken etc
    const url1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
    const url2 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
    const url3 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb"
    const url4 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous"
    const url5 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork"
    hitServer(url1, url2, url3, url4, url5);

})

document.getElementById("vegetarian").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
    hitServer(url);
})
document.getElementById("vegan").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
    hitServer(url);
})
document.getElementById("salad").addEventListener("click", function () {
    //not ready yet
})
document.getElementById("soups").addEventListener("click", function () {
    //not ready yet
})
document.getElementById("pasta").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta"
    hitServer(url);
})
document.getElementById("desert").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
    hitServer(url);
})
document.getElementById("breakfast").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
    hitServer(url);

})

//a double fetch, first by category, second by meal name
function hitServer(url) {
    fetch(url)

        .then(function (response) {
            return response.json();
        })

        .then(function (json) {

            for (let meal of json.meals) {

                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`)
                    .then(function (response) {
                        return response.json();

                    })
                    .then(function (json) {
                        renderMealsByCategory(json.meals);

                    })
            }
        });

}

//rendering meals by category
function renderMealsByCategory(meals) {
    console.log(meals);
    let mealsContainer = document.getElementById("meals-container");
    // mealsContainer.innerHTML = "";
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
    //    removeCategoryPanel();
}

// function removeCategoryPanel() {
//     let elements = document.getElementsByClassName("card bg-transparent border-0");
//     while (elements.length > 0) {
//         elements[0].parentNode.removeChild(elements[0]);
//     }

// }

