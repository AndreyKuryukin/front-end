const exchangeColors = function () {

    let redSquare = document.getElementById("red");
    var greenSquare = document.getElementById("green");

    if (redSquare.classList.contains("red")) {
        redSquare.classList.remove("red")
        redSquare.classList.add("green")
        greenSquare.classList.remove("green")
        greenSquare.classList.add("red")
    }
    else {
        redSquare.classList.remove("green")
        redSquare.classList.add("red")
        greenSquare.classList.remove("red")
        greenSquare.classList.add("green")
    }
}