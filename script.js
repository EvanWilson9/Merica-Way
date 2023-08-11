const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');

const review1 = document.querySelector('.review-content');
const review2 = document.querySelector('.review-content2');
const review3 = document.querySelector('.review-content3');

let count = 0;
let reviewArray = [review1, review2, review3];

left.onclick = function(){
    reviewArray[count].style.display = 'none';
    count-=1;
    if(count < 0){
        count = 2;
    }
    console.log(count);

    reviewArray[count].style.display = 'flex';
}

// right.onclick = function(){
//     count++;

//     switch(count){
//         case 1:
//             review1.style.display = "block";
//             review2.style.display = "none";
//             review3.style.display = "none";
//             console.log('one');
//             break;
//         case 2:
//             review1.style.display = "none";
//             review2.style.display = "block";
//             review3.style.display = "none";
//             console.log('two')
//             break;
//         case 3:
//             review1.style.display = "none";
//             review2.style.display = "none";
//             review3.style.display = "block";
//             console.log('three')
//             break;
//     }
// }
