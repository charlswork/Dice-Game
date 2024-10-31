function randomNumber() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    return { randomNumber1, randomNumber2 };
}

function whoWin(randomNumber1, randomNumber2) {
    if (randomNumber1 === randomNumber2) {
        return "TIE";
    } else if (randomNumber1 > randomNumber2) {
        return "PLAYER 1 WINS";
    } else {
        return "PLAYER 2 WINS";
    }
}

function createDots(dieId, number) {
    const die = document.getElementById(dieId);
    die.innerHTML = ""; // Clear previous dots

    for (let i = 0; i < number; i++) {
        const dot = document.createElement("div");
        dot.className = "dot"; // Add a class for styling
        die.appendChild(dot);
    }
}

// Generate random numbers and determine the winner on page load
const { randomNumber1, randomNumber2 } = randomNumber();
createDots("die1", randomNumber1); // Create dots for Player 1
createDots("die2", randomNumber2); // Create dots for Player 2
const result = whoWin(randomNumber1, randomNumber2);

// Display the results in the console
console.log("1st random number in the dice: " + randomNumber1);
console.log("2nd random number in the dice: " + randomNumber2);
console.log(result);

// Update the <h1> element with the result
document.querySelector("#idresult").innerHTML = result;
