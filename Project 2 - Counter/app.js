// set inital value to zero for the lovely counter :D
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

/* This JavaScript code makes a digital counter on a webpage with buttons to control it. 
At first, the counter is set to zero, and the code knows where the number is shown on the webpage (#value) and where the buttons are. 
When you click a button, the code checks which button it is and does something special. */

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("increaseBy10")) {
      count += 10; // Modification 1: Increase by +10
    } else if (styles.contains("decreaseBy10")) {
      count -= 10; // Modification 2: Increase by -10
    } else if (styles.contains("randomChange")) {
      const randomArray = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5]; // Modification 3: Random change in a 10-digit array
      const randomIndex = Math.floor(Math.random() * randomArray.length);
      count += randomArray[randomIndex]; 
    } else {
      count = 0;
    }

/* If it's the "decrease" button, the number goes down by 1; if it's "increase," the number goes up by 1. 
There are also fun buttons: "increaseBy10" makes the number go up by 10, "decreaseBy10" makes it go down by 10, and "randomChange" picks a random change from a list. 
The code also changes the color of the number: green for positive, red for negative, and a normal color for zero. 
So, when you click the buttons, you're playing with a digital number that reacts in different ways and changes colors! */

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }
    
    value.textContent = count;
  });
});