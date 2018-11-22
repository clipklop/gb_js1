/**
 * JS Slider
 * First version with the events (buttons are not working).
 */


const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let loopCount = 1;

  
const loopPics = (images) => {
  let eventObj = {
    target: images[loopCount]
  };
  changeBig(eventObj);
  loopCount++;

  if (loopCount === images.length) { loopCount = 0; }
}

const init = () => {
  let images = document.querySelectorAll('.slider img')
  
  images.forEach(img => {
    img.onerror = () => { alert('Sorry, bro no pics there.') }
    img.addEventListener('click', changeBig);
  })

  let loopInterval = setInterval(loopPics, 6000, images);
}

const changeBig = (event) => {
  let bigPic = document.getElementsByClassName('jumbotron')[0].childNodes[1];
  let clickedElem = event.target.getAttribute('src')
  bigPic.src = clickedElem;
}


window.onload = init;
window.onerror = () => { alert('Sorry, bro no pics there.') };