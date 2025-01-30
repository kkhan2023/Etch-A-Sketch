// function for creating 16x16 grid inside the container div

function createGrid(size) {
  const container = document.getElementById("container"); // get container element from DOM
  container.innerHTML = "";

  let gridSize = 560 / size; // number of pixels divided by number of grids

  for (let i = 0; i < size * size; i++) {
    // create loop for div generation
    const div = document.createElement("div"); // create new div element
    div.classList.add("grid");
    div.style.width = `${gridSize}px`; // assign width to grid size
    div.style.height = `${gridSize}px`; // assign height to grid size
    div.style.border = "solid black 1px";
    container.appendChild(div);
  }
  addHoverEffect(); // Initiates the hover effect for 16x16 grid & when the user enters different grid size. If this function was not called here, then hover effect would not work for other grid sizes chosen by user.
}

function addHoverEffect() {
  const divHover = document.querySelectorAll(".grid"); // query .grid class from DOM

  divHover.forEach((div) => {
    // As their are multiple div elements with the class .grid , an event listener must be attached to each .grid div.

    div.addEventListener(
      "mouseenter",
      (event) => {
        // highlight the mouseenter target
        event.target.style.background = "black";

        // reset the colour after a short delay
        setTimeout(() => {
          event.target.style.background = "";
        }, 8000);
      },
      false
    );
  });
}
createGrid(16); // call the function to start off with 16x16 grid

// Create button inside to div and append before the parent container in DOM

const container = document.getElementById("container"); // Get element from DOM
const buttonDiv = document.createElement("div"); // Create new Div
buttonDiv.setAttribute("id", "buttonDiv");
container.parentNode.insertBefore(buttonDiv, container); // Reference the parent node of DOM and append the buttonDiv before the container

const changeGridButton = document.createElement("button"); // create button
changeGridButton.setAttribute("id", "changeGridButton"); // assign new ID to button
changeGridButton.innerHTML = "Change Grid Options"; // add text to button
buttonDiv.appendChild(changeGridButton); // append the button to buttonDiv which is now above container

let button = document.getElementById("changeGridButton"); // get ID for button from DOM

// add event listener for when button is clicked

button.addEventListener("click", () => {
  let userInput = prompt(
    "Enter your chosen grid size e.g 10 for 10x10 grid",
    "16"
  );
  userInput = parseInt(userInput); // converts text into a value

  if (!userInput || userInput < 1 || userInput > 100) {
    // if user inputs a value which is false, under 1 or over 100 this alerts them to input the correct value
    alert("please enter a number from 1-100");
    return;
  }

  createGrid(userInput); // calls the createGrid function to generate another grid size based on user input
});
