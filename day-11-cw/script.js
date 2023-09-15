document.addEventListener("DOMContentLoaded", function () {
    const resultDiv = document.getElementById("result");

    document.addEventListener("keydown", function (event) {
        const keyPressed = event.key;
        const asciiCode = event.keyCode;
        resultDiv.textContent = `You Pressed the key:  " ${keyPressed} " and Value is :  ${asciiCode}  ` ;
    });
});
