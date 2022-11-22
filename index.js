let slider = document.querySelector("#slider");
let index = 2;
let dX = 1;
let delay = 3000;

slider.addEventListener('mouseenter', (e) => {
    clearInterval(scroller);
    scroller = null;
})
slider.addEventListener('onscroll', (e) => {
    clearInterval(scroller);
    scroller = null;
})
window.addEventListener("blur", (e) => {
    clearInterval(scroller);
    scroller = null;
})
slider.addEventListener('mouseleave', (e) => {
    if (!scroller) scroller = setInterval(scrollCards, delay);
})
window.addEventListener('focus', (e) => {
    if (!scroller) scroller = setInterval(scrollCards, delay);
})

function scrollCards() {
    if (!isInViewport(slider)) return;
    slider.children[index].scrollIntoView({behavior: "smooth", block:"nearest", inline: "center"});
    index = (index + dX) % slider.children.length;
}

// https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let scroller = setInterval(scrollCards, delay);
