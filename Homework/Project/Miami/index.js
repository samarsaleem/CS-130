let currentIndex =0

const images = [
    'Miami\ pics/IMG_3610.jpg',
    'Miami\ pics/IMG_3611.jpg',
    'Miami\ pics/IMG_3612.jpg',
    'Miami\ pics/IMG_3613.jpg',
    'Miami\ pics/IMG_3614.jpg',
    'Miami\ pics/IMG_3615.jpg',
    'Miami\ pics/IMG_3616.jpg',
    'Miami\ pics/IMG_3617.jpg',
    'Miami\ pics/IMG_3618.jpg',
    'Miami\ pics/IMG_3619.jpg',
    'Miami\ pics/IMG_3809.jpg',
    'Miami\ pics/IMG_3810.jpg',
    'Miami\ pics/IMG_3811.jpg'
    
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