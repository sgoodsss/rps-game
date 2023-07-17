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
    // Need to choose a random number from our array of choices. (math.random)
    // Our array is 3 choices, so we multiply by 3
    // We need to round down to create a whole number (math.floor)
    // Store the result in a variable, not a console log
    const randomNumber = (Math.floor(Math.random () * 3));
    // We don't want the number, we want the element.
    return choices[randomNumber];
}

// Define game function
// Game function needs to take in user input
function game(userChoice) {
    const computerChoice = getComputerChoice();
    // Using a switch statement instead of if statement
    switch (userChoice + computerChoice) {
        // Let's take care of the scenarios in which the user will win
        case `rs`:
        case `pr`:
        case `sp`:
            console.log(`USER WINS!`);
            break;
        // Scenarios in which the user loses
        case "sr":
        case `rp`:
        case `ps`:
            console.log(`computer wins :(`);
            break;
        // Tie
        case "rr":
        case `pp`:
        case `ss`:
            console.log(`It's a tie!`);
            break;
    }
}