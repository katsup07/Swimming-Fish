let x = 0;
let y = 0;
const speed = 20;
let degreesV; //V for vertical direction rotation
let degreesH //H for horizontal direction rotation
const fish = document.querySelector('.fish');

function handleKeyDown(event) {
  //Ignore anything but arrow keys
  if(!event.key.includes('Arrow')) { return; }
  switch (event.key) {
    case 'ArrowUp':
      y = y - 1;
      degreesV = -90;
      degreesH = 0;
      break;
    case 'ArrowDown':
      y = y + 1;
      degreesV = 90;
      degreesH = 0;
      break;
    case 'ArrowRight':
      x = x + 1;
      degreesV = 0;
      degreesH = 0;
      break;
    case 'ArrowLeft':
      x = x - 1;
      degreesV = 0;
      degreesH = 180;
      break;
    default:
      console.log('That is not a valid move!');
      break;
  }


  console.log(x,y);
// turtle.style['background'] = 'red'; // Inline styles for standard CSS styles can take 'style' tag
        fish.setAttribute('style', 
        `--x: ${x*speed}px; 
        --y: ${y*speed}px; 
        --rotateV: ${degreesV}deg;); 
        --rotateH: ${degreesH}deg;`); 
 // Inline styles for custom styles need the setAttribute() method
 
}
window.addEventListener('keydown', handleKeyDown);