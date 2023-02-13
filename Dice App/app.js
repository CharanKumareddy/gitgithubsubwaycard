
let diceNumber = document.getElementById("diceNumber");
let rollBtn = document.getElementById("rollBtn");
rollBtn.addEventListener("click",function(){
    let rollNumber = Math.ceil(Math.random() *6 + 1);
    diceNumber.style.animation = "none";
    diceNumber.textContent = "";
    diceNumber.offsetWidth;
    diceNumber.style.animation = "roll 0.5s";

    setTimeout(function(){
        diceNumber.textContent = rollNumber;
    }, 500);

});
