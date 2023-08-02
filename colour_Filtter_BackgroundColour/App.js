const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const colorElements = document.querySelectorAll(".color"); // Use the plural form for better clarity

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];

    // Loop through the color elements and update their text content
    colorElements.forEach(function (element) {
        element.textContent = colors[randomNumber];
    });
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
