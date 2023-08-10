let time = document.getElementById("timer");
let div = document.getElementById("cont");
let defuse = document.getElementById("defuser");

let countdown = 10;
let unique_id = setInterval(function() {
    countdown -= 1;
    time.textContent = countdown;
    if (countdown === 0) {
        time.textContent = "Boom Baam";
        div.style.backgroundColor = "red";
        clearInterval(unique_id);
    }
}, 1000);

defuse.addEventListener("keydown", function(event) {
    let defuser_text = defuse.value;
    if (defuser_text === "surya" && event.key === "Enter" && countdown !== 0) {
        clearInterval(unique_id);
        time.textContent = "Bomb is Cancelled";


    }

});