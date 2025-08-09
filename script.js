
let maveli = document.getElementById("maveli");
let counter = document.getElementById("counter");
let tickleCount = 0;

// When Maveli is clicked
maveli.addEventListener("click", () => {
    // Increase tickle count
    tickleCount++;
    counter.textContent = `ചിരിപ്പിച്ചു: ${tickleCount}`;

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
// 🎉 Party Button Confetti
let partyBtn = document.getElementById("partyBtn");
partyBtn.addEventListener("click", () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
