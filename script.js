document.getElementById("tickle-btn").addEventListener("click", function() {
    let maveli = document.getElementById("maveli");

    // Make Maveli jump
    maveli.classList.add("jump");

    

    // Remove jump after 0.2s so it can trigger again
    setTimeout(() => {
        maveli.classList.remove("jump");
    }, 200);
});
