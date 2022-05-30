let currentIndex =0

const images = [
    'new\ york\ pics/IMG_3598.jpg',
    'new\ york\ pics/IMG_3599.jpg',
    'new\ york\ pics/IMG_3602.jpg',
    'new\ york\ pics/IMG_3603.jpg',
    'new\ york\ pics/IMG_3604.jpg',
    'new\ york\ pics/IMG_3605.jpg',
    'new\ york\ pics/IMG_3606.jpg',
    'new\ york\ pics/IMG_3607.jpg',
    'new\ york\ pics/IMG_3608.jpg',
    'new\ york\ pics/IMG_3609.jpg',
    'new\ york\ pics/IMG_3812.jpg',
    'new\ york\ pics/IMG_3813.jpg',
    'new\ york\ pics/IMG_3814.jpg'
    
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