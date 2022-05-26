// const makeBigger = () => {
//    alert('make bigger!');
// };

// const makeSmaller = () => {
//    alert('make smaller!');
// };

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

let currentFontSize = 1.4;

const makeBigger = () => {
   currentFontSize = currentFontSize +0.2;
   document.querySelector('.content').style.fontSize = '${currentFontSize}em';
   document.querySelector('h1').style.fontSize = '${currentFontSize + 0.5}em';
};
const makeSmaller = () => {
   currentFontSize = currentFontSize - 0.2;
   document.querySelector('.content').style.fontSize = '${currentFontSize}em';
   document.querySelector('h1').style.fontSize = '${currentFontSize + 0.5}em';
};
const setFontSize = () => {
   document.querySelector('.content').style.fontSize= '${currentFontSize}em';
   document.querySelector('h1').style.fontSize = '${currentFontSize + 0.5}em';
};
