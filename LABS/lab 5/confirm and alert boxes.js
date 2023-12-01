   
const confirmation = confirm("Do you want to continue?");
if (confirmation) {
    console.log("User clicked OK.");
} else {
    console.log("User clicked Cancel.");
}
let userInput = prompt("Please enter your name:", "John Doe");
if (userInput !== null) {
    console.log(`Hello, ${userInput}!`);
} else {
    console.log("User canceled the prompt.");
}
let UserInput = prompt("Please enter your name:");
if (UserInput !== null) {
    alert(`Hello, ${userInput}!`);
} else {
    alert("You didn't enter a name.");
}
