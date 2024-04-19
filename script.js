let dubaitext = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');
let building = document.getElementById('building');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaitext.style.left = value * -2 + 'px';
    burjkhalifa.style.left = value * 1 + 'px';
    stars.style.left = value * 1 + 'px';
    building.style.top = value * 0.5 + 'px'; // Adjust speed and direction as needed
});
