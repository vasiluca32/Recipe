//here are the click event on category image => fetch by url
document.getElementById("meat").addEventListener("click", function () {
    //multiple url's because meat can be from beef chicken etc

    const url = ["https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb",
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous",
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
    ];
    for (i = 0; i < url.length; i++) {
        getByCategory(url[i]);
    }
})

document.getElementById("vegetarian").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
    getByCategory(url);
})
document.getElementById("vegan").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan"
    getByCategory(url);
})
document.getElementById("salad").addEventListener("click", function () {
    //not ready yet
})
document.getElementById("soups").addEventListener("click", function () {
    //not ready yet
})
document.getElementById("pasta").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta"
    getByCategory(url);
})
document.getElementById("desert").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
    getByCategory(url);
})
document.getElementById("breakfast").addEventListener("click", function () {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
    getByCategory(url);

})
