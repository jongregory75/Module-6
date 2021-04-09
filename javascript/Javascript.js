
//function growFunction() {

document.getElementById("growButton").addEventListener("click", function () {

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";

});
//};

//function blueFunction() {
document.getElementById("blueButton").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "blue";

});
//};


document.getElementById("fadeButton").addEventListener("click", function () {

    document.getElementById("box").style.opacity = "0.5";

});


document.getElementById("resetButton").addEventListener("click", function () {

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1.0";

});
