const addLetters = () => {
  let letterListContainer = document.querySelector("#letters .row");
  for (let i = 65; i < 91; i++) {
    let c = String.fromCharCode(i);
    const letter = document.createElement("div");
    letter.innerText = c;
    letter.id = c;
    letter.classList.add("pl-2");
    letter.classList.add("pr-2");
    letter.classList.add("zoom");

    letter.addEventListener("click", getByLetter);

    letterListContainer.appendChild(letter);
  }
};

addLetters();

document.querySelector('#btn').addEventListener("click", getByName);
