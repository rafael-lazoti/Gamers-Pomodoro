

// calls h1 id and sets title text
document.getElementById("title").textContent = "Gamer's Pomodoro";

//Prints age to console 
let age = 18;
let name = `Rafael`;
let online = true;

console.log(`You are ${age} years old!`);

//Prints data type of variable
console.log(typeof age);
console.log(typeof `name`);
console.log(typeof online);

//Sets tile to anme via variable
//document.getElementById("title").textContent = `name`;

let searchInput;
document.getElementById(`mySubmit`).addEventListener("click", () => {
    let searchInput = document.getElementById(`search`).value;
    console.log(searchInput);
})



