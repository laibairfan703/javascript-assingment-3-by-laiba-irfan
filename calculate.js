// ---------------------------------------------------exercise 6.1---------------------------------------------------
// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}
function addition() {
    

// Variables with different values
let a = 5;
let b = 7;

// Using the function with the variables
let sum1 = addNumbers(a, b);
console.log(`The sum of ${a} and ${b} is: ${sum1}`);

// Using the function with two different numbers
let x = 10;
let y = 3;

let sum2 = addNumbers(x, y);
console.log(`The sum of ${x} and ${y} is: ${sum2}`);
}
// --------------------------------------------------- exercise 6.2----------------------------------------------------
// Array of descriptive words
const descriptions = [
    "awesome",
    "amazing",
    "superb",
    "fantastic",
    "incredible",
    "brilliant",
    "marvelous",
    "wonderful",
    "remarkable"
];

// Function to randomly describe a name
function describeName() {
    // Prompt for user input
    let name = prompt("Please enter a name:");

    // Check if the user entered a name
    if (name) {
        // Select a random description from the array
        let randomIndex = Math.floor(Math.random() * descriptions.length);
        let randomDescription = descriptions[randomIndex];

        // Output the result to the console
        console.log(`The name '${name}' is ${randomDescription}!`);
    } else {
        console.log("You did not enter a name.");
    }
}

// Invoke the function
describeName();

//----------------------------------------------exercise 6.3-------------------------------------------
// Step 1: Set up two variables containing number values
function exercise3() {
    

let num1 = 10;
let num2 = 5;

// Step 2: Set up a variable to hold an operator, default to 'add'
let operator = 'add'; // This can be 'add' or 'subtract'

// Step 3: Create a function to perform addition or subtraction based on the operator
function calculate(num1, num2, operation = 'add') {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else {
        console.log(`Invalid operation '${operation}'. Defaulting to addition.`);
        return num1 + num2; // Default to addition if operation is not recognized
    }
}

// Step 4: Call the function with console.log() to output the result
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);

// Step 5: Update the operator and call the function again
operator = 'subtract';
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);
}
// -----------------------------------------------------exercise4.5---------------------------------------------
// Step 1: Prompt the user to set the prize value
function exercise4() {
    

let prize = prompt("Set the prize value by selecting a number between 0 and 10:");

// Step 2: Convert the prompt response to a number data type
prize = parseInt(prize);

// Step 3: Create a variable for the output message
let outputMessage = "My Selection: ";

// Step 4: Use switch statement to determine prize based on selected number
switch (prize) {
    case 0:
        outputMessage += "You won a vacation!";
        break;
    case 1:
        outputMessage += "Congratulations! You get a new car!";
        break;
    case 2:
        outputMessage += "You've won a shopping spree!";
        break;
    case 3:
        outputMessage += "Enjoy your new laptop!";
        break;
    case 4:
        outputMessage += "You've won a luxury watch!";
        break;
    case 5:
        outputMessage += "Congratulations! You win a gaming console!";
        break;
    case 6:
        outputMessage += "You get a weekend getaway!";
        break;
    case 7:
        outputMessage += "Enjoy your cash prize!";
        break;
    case 8:
        outputMessage += "You've won a gourmet dinner for two!";
        break;
    case 9:
        outputMessage += "Congratulations! You win a spa day!";
        break;
    case 10:
        outputMessage += "You are the lucky winner of a grand prize!";
        break;
    default:
        outputMessage += "Sorry, you did not win a prize this time.";
}

// Step 6: Output the message to the user
console.log(outputMessage);
alert(outputMessage);

}

// --------------------------------------------------number game----------------------------------------
// Step 1: Define a dynamic number value
function numbergame() {

let dynamicNumber = 50; 
// You can change this number to any value

// Step 2: Prompt the user to enter a number
let userNumber = prompt("Enter a number:");

// Step 3: Convert the user input to a number data type
userNumber = parseFloat(userNumber); // Using parseFloat to handle decimal inputs

// Step 4: Compare the user's number with the dynamic number value and output the result
if (userNumber > dynamicNumber) {
    alert(`${userNumber} is greater than ${dynamicNumber}.`);
} else if (userNumber < dynamicNumber) {
    alert(`${userNumber} is less than ${dynamicNumber}.`);
} else {
    alert(`${userNumber} is equal to ${dynamicNumber}.`);
}

}
//-------------------------------------------------------------friend checking game-----------------------
// Step 1: Prompt the user to enter a name
function friendgame() {

let userName = prompt("Enter a name:");

// Step 2: Using switch statement to check if the name is a known friend
switch (userName.toLowerCase()) {
    case "tube":
        console.log(`${userName} is a friend.`);
        break;
    case "ali":
        alert(`${userName} is not a friend because she make only female friends`);
        break;
    case "sara":
        console.log(`${userName} is a friend.`);
        break;
    case "neha":
        console.log(`${userName} is a friend.`);
        break;
    case "mehakh":
            console.log(`${userName} is a friend.`);
            break;
    case "tehreem":
            console.log(`${userName} is a friend.`);
            break;
    case "fizza":
            console.log(`${userName} is a friend.`);
            break;
    case "hammad":
            alert(`${userName} is not a friend because she make only female friends`);
            break;
    default:
        console.log(`Sorry, I don't know ${userName}.`);
}
}

// ----------------------------------rock paper game---------------------------------
function rock() {
// Step 1: Create an array for Rock, Paper, Scissors
let choices = ['Rock', 'Paper', 'Scissors'];

// Step 2: Generate random selections for player and computer
let playerIndex = Math.floor(Math.random() * choices.length);
let computerIndex = Math.floor(Math.random() * choices.length);

// Step 3: Variables to hold user messages
let playerSelection = choices[playerIndex];
let computerSelection = choices[computerIndex];
let message = `Player selected: ${playerSelection}\nComputer selected: ${computerSelection}\n`;

// Step 4: Condition for tie
if (playerIndex === computerIndex) {
    message += "It's a tie!";
} else {
    // Step 5: Conditions for game logic
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        message += "Player wins!";
    } else {
        message += "Computer wins!";
    }
}

// Step 6: Output the result using alert
alert(message);
}
