const countries = ['Algerian', 'American', 'Argentinian', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Norwegian', 'Portuguese', 'Russian', 'Slovakian', 'Spanish', 'Syrian', 'Thai', 'Tunisian', 'Turkish', 'Vietnamese'];

const addImages = () => {
  let carouselListContainer = document.querySelector("#flags .row");
  for (let country of countries) {
    const newButton = document.createElement("div");
    newButton.classList.add("col-xl-1");
    newButton.classList.add("col-lg-1");
    newButton.classList.add("col-md-2");
    newButton.classList.add("col-sm-3");
    newButton.classList.add("col-6");

    newButton.classList.add("zoom");

    newButton.addEventListener("click", getByFlag);

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
};

window.addEventListener('load', addImages);
