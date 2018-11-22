/**
 * JS Slider
 * Second version with the img index injection, with working buttons.
 */


const images = document.querySelectorAll('.slider img')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let loopCount = 1;

  
const loopPics = (images) => {
  changeBig(loopCount, images[loopCount].src);
  loopCount++;

  if (loopCount === images.length) { loopCount = 0; }
}

const buttonLoop = (images, direction) => {
  changeBig(loopCount, images[loopCount].src);

  direction === 'next' ? loopCount++ : direction === 'prev' ? loopCount-- : null;

  loopCount > images.length - 1 ? loopCount = 0 : loopCount < 0 ? loopCount = images.length - 1 : null
}

const init = () => {
  images.forEach((img, i) => {
    img.addEventListener('click', () => {
      changeBig(i, img.src);
    })
  })

  let loopInterval = setInterval(loopPics, 12000, images);

  next.addEventListener('click', () => { buttonLoop(images, 'next') })
  prev.addEventListener('click', () => { buttonLoop(images, 'prev') })
}

const changeBig = (i, src) => {
  let bigPic = document.getElementsByClassName('jumbotron')[0].childNodes[1];
  bigPic.src = src;
  loopCount = i;
}


window.onload = init;
window.onerror = () => { alert('Sorry, bro no pics there.') };

