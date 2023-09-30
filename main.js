const pre = document.querySelector(".gastrobar-logo");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
});

function rotateElement(event, element) {
    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX)) / 50;
    const offsetY = ((y - middleY)) / 50;

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}
