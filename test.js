// Cached the DOM
// Storing all elements and ids in variables so that we can use them later
const userScore = 0;
const computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function main() {
    // Add Event Listeners to each function
    rock_div.addEventListener (`click`, function () {
        game (`r`);
    })

    paper_div.addEventListener (`click`, function () {
        game (`p`);
    })

    scissors_div.addEventListener (`click`, function () {
        game (`s`);
    })
}

// Running above function
main();

// need function for computer choice (random)
function getComputerChoice() {
    const choices = [`r`, `p`, `s`];
    // Need to choose a random number from our array of choices
    console.log(Math.random ());
}

// Define game function
// Game function needs to take in user input
function game(userChoice) {

}