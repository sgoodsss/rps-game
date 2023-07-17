// Cached the DOM
// Storing all elements and ids in variables so that we can use them later
let userScore = 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
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

// Function to help with readability for win vs. lose prompts
function convertToWord(letter) {
    if (letter === `r`) return `Rock`;
    if (letter === `p`) return `Paper`;
    return `Scissors`;

}

function win(userChoice, computerChoice) {
    // Want to increase the user score on the scoreboard
    userScore++;
    // I want the result to show on the page- select the element by id
    userScore_span.innerHTML = userScore;
    // Computer score does not change
    computerScore_span.innerHTML = computerScore;
    // To print the result on the page
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!!!`
}

function lose() {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!!!`
}

function tie () {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!!!`
}
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
            //Function for WINS instead of console.log 
            win(userChoice, computerChoice);
            break;
        // Scenarios in which the user loses
        case "sr":
        case `rp`:
        case `ps`:
            lose(userChoice, computerChoice);
            break;
        // Tie
        case "rr":
        case `pp`:
        case `ss`:
            tie(userChoice, computerChoice);
            break;
    }
}