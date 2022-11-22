function reveal(button, elem) {
    let elements = document.querySelectorAll(".awardSection, #selector>button");
    elements = Array.from(elements);
    elements.forEach(el => {
        el.classList.remove("showing");
    });
    document.querySelector(elem).classList.add("showing");
    button.classList.add("showing");
}