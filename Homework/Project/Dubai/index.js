let currentIndex =0

const images = [
    'Dubai\ pics/IMG_3620.jpg',
    'Dubai\ pics/IMG_3621.jpg',
    'Dubai\ pics/IMG_3622.jpg',
    'Dubai\ pics/IMG_3623.jpg',
    'Dubai\ pics/IMG_3624.jpg',
    'Dubai\ pics/IMG_3625.jpg',
    'Dubai\ pics/IMG_3626.jpg',
    'Dubai\ pics/IMG_3627.jpg',
    'Dubai\ pics/IMG_3628.jpg',
    'Dubai\ pics/IMG_3629.jpg',
    'Dubai\ pics/IMG_3818.jpg',
    'Dubai\ pics/IMG_3819.jpg',
    'Dubai\ pics/IMG_3820.jpg'
    
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