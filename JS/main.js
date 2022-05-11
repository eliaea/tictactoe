let box = document.querySelector(".tictactoe");

box.addEventListener("click", () => {

    let random = Math.random() * 100 + 100;

    let left = Math.abs(Math.random() * 100 - 20);
    let top = Math.abs(Math.random() * 100 - 20);

    console.log(top)
    console.log(random)
    box.style.width = `${random}px`;
    box.style.height = `${random}px`;
    box.style.left = `${left}%`
    box.style.top = `${top}%`
})