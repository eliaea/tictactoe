let box = document.querySelector(".tictactoe");

box.addEventListener("click", () => {

    let random = Math.random() * 100 + 100;

    let verticalMargin = Math.random() * 200 + 100;
    let horizontalMargin = Math.random() * 200 + 100;

    console.log(random)
    box.style.width = `${random}px`;
    box.style.height = `${random}px`;
    box.style.margin = `${verticalMargin}px ${horizontalMargin}px`
})