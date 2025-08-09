
let maveli = document.getElementById("maveli");
let counter = document.getElementById("counter");
let tickleCount = 0;

// When Maveli is clicked
maveli.addEventListener("click", () => {
    // Increase tickle count
    tickleCount++;
    counter.textContent = `Tickles: ${tickleCount}`;

    // Make Maveli jump
    maveli.classList.add("jump");
    let laugh = new Audio("assets/laugh.mp3");
     laugh.currentTime = 0;
     laugh.play();


    

    // Remove jump after 0.2s so it can trigger again
    setTimeout(() => {
        maveli.classList.remove("jump");
    }, 200);
});
