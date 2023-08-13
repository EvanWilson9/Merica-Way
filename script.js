const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');

const review1 = document.querySelector('.review-content');
const review2 = document.querySelector('.review-content2');
const review3 = document.querySelector('.review-content3');

const dotOne = document.querySelector('.dot-1');
const dotTwo = document.querySelector('.dot-2');
const dotThree = document.querySelector('.dot-3');

let count = 0;
let reviewArray = [review1, review2, review3];

left.onclick = function () {
  reviewArray[count].style.display = 'none';
  count--;
  if (count < 0) {
    count = 2;
  }
  console.log(count);

  checkDot()

  reviewArray[count].style.display = 'flex';
}

right.onclick = function () {
  reviewArray[count].style.display = 'none';
  count++;
  if (count > 2) {
    count = 0;
  }
  console.log(count);

  checkDot();

  reviewArray[count].style.display = 'flex';
}


function checkDot() {
  switch (count) {
    case 0:
      dotOne.style.background = "white";
      dotTwo.style.background = "darkgray";
      dotThree.style.background = "darkgray";
      break;
    case 1:
      dotOne.style.background = "darkgray";
      dotTwo.style.background = "white";
      dotThree.style.background = "darkgray";
      break;
    case 2:
      dotOne.style.background = "darkgray";
      dotTwo.style.background = "darkgray";
      dotThree.style.background = "white";
      break;
  }
}
