let currentIndex =0

const images = [
    'Paris\ pics/IMG_3590.jpg',
    'Paris\ pics/IMG_3591.jpg',
    'Paris\ pics/IMG_3592.jpg',
    'Paris\ pics/IMG_3593.jpg',
    'Paris\ pics/IMG_3594.jpg',
    'Paris\ pics/IMG_3595.jpg',
    'Paris\ pics/IMG_3596.jpg',
    'Paris\ pics/IMG_3597.jpg',
    'Paris\ pics/IMG_3643.jpg',
    'Paris\ pics/IMG_3644.jpg',
    'Paris\ pics/IMG_3645.jpg',
    'Paris\ pics/IMG_3821.jpg',
    'Paris\ pics/IMG_3822.jpg',
    'Paris\ pics/IMG_3823.jpg',
    
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

const handleThumbnailClick = ev => {
    console.log(ev);
    const elem = ev.currentTarget;
    console.log(elem);
    const bgImage = eelem.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = bgImage;
} 

initScreen();

// event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);
    document.querySelector('.featured_image').setAttribute("style", `background-image:url(${images[currentIndex]})`)
};
const showNext = (ev) => {
    currentIndex += 1;
    if (currentIndex === 10) {
        currentIndex = 0
        console.log ('loop')
    }
    console.log("currentIndex:", currentIndex);
    document.querySelector('.featured_image').setAttribute("style", `background-image:url(${images[currentIndex]})`)
};

const showPrev = (ev) => {
    currentIndex -= 1;
    if (currentIndex === -1) {
        currentIndex = 9
        console.log ('loop')
    }
    console.log("currentIndex:", currentIndex);
    document.querySelector('.featured_image').setAttribute("style", `background-image:url(${images[currentIndex]})`)
};

const imageElements = document.querySelectorAll('.image');
for (const elem of imageElements) {
    elem.onclick = showImage;
}

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;