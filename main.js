var msg = {
  message: ''
}
var intro = anime.timeline();

intro
.add({
    targets: '.welcome .wel',
    easing: 'easeInOutSine',
    scale: [300, 1],
    opacity: [0,1],
    duration: 1000
})
.add({
    targets: '.cont',
    easing: 'easeInOutSine',
    duration: 1500,
    opacity: [0, 1]
})
.add({
    targets: '.welcome .wel',
    value: 100,
    round: 1
})

var triangle = anime.timeline({
    autoplay: false
});

triangle
.add({
    targets: '.cont',
    easing: 'easeInOutSine',
    duration: 300,
    scale: [1, 0]
})
.add({
    targets: '.welcome .wel',
    easing: 'easeInOutSine',
    duration: 300,
    scale: [1, 0],
    offset: '-=300'
})
.add({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 }
})
.add({
    targets: '.c1',
    easing: 'easeInOutSine',
    duration: 3000,
    rotate: '3turn',
    offset:'-=4000',
    scale: [0,1]
})
.add({
    targets: '.c2',
    easing: 'easeInOutSine',
    duration: 3000,
    rotate: '-3turn',
    offset:'-=4000',
    scale: [0, 1]
})
.add({
    targets: '.c1',
    easing: 'easeInOutSine',
    duration: 300,
    scale: [1, 0]
})
.add({
    targets: '.c2',
    easing: 'easeInOutSine',
    duration: 600,
    offset: '-=300',
    scale: [1,0]
})
.add({
    targets: '.numbers',
    duration: 800,
    offset: '-=600',
    scale: [0,1]
})
.add({
    targets: '.prompt',
    duration: 3000,
    offset: '-=50',
    opacity: [0,1]
})
document.querySelector('.cont').addEventListener('click',triangle.play);

//menu
var cur = 10;
var active = false;
var modal = document.querySelector('.modal');
var modalCont = document.querySelector('.modal-content');
var details = document.getElementById('details');
var title = document.getElementById('title');
var numbers = Array.prototype.slice.call(document.querySelectorAll('.n'));
var previous = document.querySelector('.prev');
var next = document.querySelector('.next');

//Click Functions
function clickOne(){
    title.textContent = '1';
    details.textContent = 'The number 1 in many number systems is the multiplicative identity, where multiplying it to a number X would not change the value of X. Contrary to popular belief, 1 is not a prime number as it is only divisible by itself. According to Benford\'s Law, the number 1 appears at the beginning of naturally prodcued numbers 30% of the time.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 2){
            previous.removeEventListener('click', clickOne);
            next.removeEventListener('click', clickThree);
        }
        else{
            previous.removeEventListener('click', clickNine);
            next.removeEventListener('click', clickOne);
        }
    }
    previous.addEventListener('click', clickZero);
    next.addEventListener('click', clickTwo);
    cur = 1;
};
function clickTwo(){
    title.textContent = '2';
    details.textContent = '2 is the smallest and only even prime number. 2 is important for the binary number system whihc is used in communication and computers for a long time. 2 can divide half of all the numbers due to the fact that it is the smallest even number. 2 is also the third number in the Fibonacci sequence.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 3){
            previous.removeEventListener('click', clickTwo);
            next.removeEventListener('click', clickFour);
        }
        else{
            previous.removeEventListener('click', clickZero);
            next.removeEventListener('click', clickTwo);
        }
    }
    previous.addEventListener('click', clickOne);
    next.addEventListener('click', clickThree);
    cur = 2;
};
function clickThree(){
    title.textContent = '3';
    details.textContent = '3 is the smallest odd prime number, the second triangle number (1+2), and the second Lucas Number. 3 is important to geometry as it is the first number that forms a geometrical figure, the triangle. 3 is also often seen as a number of knowledge and wisdom, and it is used to describe time: "past, present, future."';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 4){
            previous.removeEventListener('click', clickThree);
            next.removeEventListener('click', clickFive);
        }
        else{
            previous.removeEventListener('click', clickOne);
            next.removeEventListener('click', clickThree);
        }
    }
    previous.addEventListener('click', clickTwo);
    next.addEventListener('click', clickFour);
    cur = 3;
};
function clickFour(){
    title.textContent = '4';
    details.textContent = '4 is the smallest even square number. 4 is also the only number to have the same number of letters as its value in the English language. In a similar manner, 4 is displayed with four lines on a calculator. It is also the third Lucas Number.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 5){
            previous.removeEventListener('click', clickFour);
            next.removeEventListener('click', clickSix);
        }
        else{
            previous.removeEventListener('click', clickTwo);
            next.removeEventListener('click', clickFour);
        }
    }
    previous.addEventListener('click', clickThree);
    next.addEventListener('click', clickFive);
    cur = 4;
};
function clickFive(){
    title.textContent = '5';
    details.textContent = '5 is a prime number and the fifth number in the Fibonacci Sequence. We have 5 fingers, toes, and senses. 5 is also commonly used to mean "half" as we use a base 10 numbeer system. 5 is also seen as the number of the human being as we have four limbs and a head.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 6){
            previous.removeEventListener('click', clickFive);
            next.removeEventListener('click', clickSeven);
        }
        else{
            previous.removeEventListener('click', clickThree);
            next.removeEventListener('click', clickFive);
        }
    }
    previous.addEventListener('click', clickFour);
    next.addEventListener('click', clickSix);
    cur = 5;
};
function clickSix(){
    title.textContent = '6';
    details.textContent = 'Not only is 6 three factorial and a triangular number, it is also the smallest perfect number (1+2+3=1*2*3). 6 is also the number of sides dice have, making it an important number when tallking about probability. We also see six sided polygons, hexagons, in nature very frequently.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 7){
            previous.removeEventListener('click', clickSix);
            next.removeEventListener('click', clickEight);
        }
        else{
            previous.removeEventListener('click', clickFour);
            next.removeEventListener('click', clickSix);
        }
    }
    previous.addEventListener('click', clickFive);
    next.addEventListener('click', clickSeven);
    cur = 6;
};
function clickSeven(){
    title.textContent = '7';
    details.textContent = '7 is a prime number, a Lucas Number, and a Mersenne Prime due to the fact that it equald teo to the power of three minus 1. 7 is the most popular number among people as it symbolizes luck. We also have 7 days in a week and 7 colors for a rainbow making it a frequently used number in our daily lives.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 8){
            previous.removeEventListener('click', clickSeven);
            next.removeEventListener('click', clickNine);
        }
        else{
            previous.removeEventListener('click', clickFive);
            next.removeEventListener('click', clickSeven);
        }
    }
    previous.addEventListener('click', clickSix);
    next.addEventListener('click', clickEight);
    cur = 7;
};
function clickEight(){
    title.textContent = '8';
    details.textContent = '8 is a Fibonacci number and also happens to be the second cube number, two cubed. In China, 8 is seen as a lucky number, symbolizing prosperity. In fact, the Chinese Summer Olympics started on 1988 August 8th 8:08.08 pm. Due to its divisors, 8 pints was chosen to be equal to a gallon.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 9){
            previous.removeEventListener('click', clickEight);
            next.removeEventListener('click', clickZero);
        }
        else{
            previous.removeEventListener('click', clickSix);
            next.removeEventListener('click', clickEight);
        }
    }
    previous.addEventListener('click', clickSeven);
    next.addEventListener('click', clickNine);
    cur = 8;
};
function clickNine(){
    title.textContent = '9';
    details.textContent = '9 is a square number and also the sum of the first three odd numbers. A number that can be divided by 9 will always have its digits sum also be divisible by 9. In ancient times, 9 was important due to its proximity to ten, which was seen as perfect.';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 0){
            previous.removeEventListener('click', clickNine);
            next.removeEventListener('click', clickOne);
        }
        else{
            previous.removeEventListener('click', clickSeven);
            next.removeEventListener('click', clickNine);
        }
    }
    previous.addEventListener('click', clickEight);
    next.addEventListener('click', clickZero);
    cur = 9;
};
function clickZero(){
    title.textContent = '0';
    details.textContent = '0 is the only real number that is neither negative or positive. Zero is the additive identity as for all X, X+0=0, and it is also its own additive inverse. Any number to the power of 0 is equal to one. 0 is a the only cmoplex number that is both purely real and imaginary. Without 0, our number system would not work the way it does!';
    if(!active){
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    })
    active = true;
    }else{
        if(cur == 1){
            previous.removeEventListener('click', clickZero);
            next.removeEventListener('click', clickTwo);
        }
        else{
            previous.removeEventListener('click', clickEight);
            next.removeEventListener('click', clickZero);
        }
    }
    previous.addEventListener('click', clickNine);
    next.addEventListener('click', clickOne);
    cur = 0;
};
//number event listeners
document.querySelector('.one').addEventListener('click', clickOne);
document.querySelector('.two').addEventListener('click', clickTwo);
document.querySelector('.three').addEventListener('click', clickThree);
document.querySelector('.four').addEventListener('click', clickFour);
document.querySelector('.five').addEventListener('click', clickFive);
document.querySelector('.six').addEventListener('click', clickSix);
document.querySelector('.seven').addEventListener('click', clickSeven);
document.querySelector('.eight').addEventListener('click', clickEight);
document.querySelector('.nine').addEventListener('click', clickNine);
document.querySelector('.zero').addEventListener('click', clickZero);
//closing modal
var close = document.querySelector('.close');

close.onclick = function() {
    modal.classList.toggle('md-show');
    numbers.forEach(function(e){
    e.classList.toggle('disable');
    active = false;
    if (cur == 1){
        previous.removeEventListener('click', clickZero);
        next.removeEventListener('click', clickTwo);
    }else if(cur == 2){
        previous.removeEventListener('click', clickOne);
        next.removeEventListener('click', clickThree);
    }else if(cur == 3){
        previous.removeEventListener('click', clickTwo);
        next.removeEventListener('click', clickFour);
    }else if(cur == 4){
        previous.removeEventListener('click', clickThree);
        next.removeEventListener('click', clickFive);
    }else if(cur == 5){
        previous.removeEventListener('click', clickFour);
        next.removeEventListener('click', clickSix);
    }else if(cur == 6){
        previous.removeEventListener('click', clickFive);
        next.removeEventListener('click', clickSeven);
    }else if(cur == 7){
        previous.removeEventListener('click', clickSix);
        next.removeEventListener('click', clickEight);
    }else if(cur == 8){
        previous.removeEventListener('click', clickSeven);
        next.removeEventListener('click', clickNine);
    }else if(cur == 9){
        previous.removeEventListener('click', clickEight);
        next.removeEventListener('click', clickZero);
    }else if(cur == 0){
        previous.removeEventListener('click', clickNine);
        next.removeEventListener('click', clickOne);
    }
    cur = 10;
    })
}
/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.toggle('md-show');
        numbers.forEach(function(e){
        e.classList.toggle('disable');
    })
    if (cur == 1){
        previous.removeEventListener('click', clickZero);
        next.removeEventListener('click', clickTwo);
    }else if(cur == 2){
        previous.removeEventListener('click', clickOne);
        next.removeEventListener('click', clickThree);
    }else if(cur == 3){
        previous.removeEventListener('click', clickTwo);
        next.removeEventListener('click', clickFour);
    }else if(cur == 4){
        previous.removeEventListener('click', clickThree);
        next.removeEventListener('click', clickFive);
    }else if(cur == 5){
        previous.removeEventListener('click', clickFour);
        next.removeEventListener('click', clickSix);
    }else if(cur == 6){
        previous.removeEventListener('click', clickFive);
        next.removeEventListener('click', clickSeven);
    }else if(cur == 7){
        previous.removeEventListener('click', clickSix);
        next.removeEventListener('click', clickEight);
    }else if(cur == 8){
        previous.removeEventListener('click', clickSeven);
        next.removeEventListener('click', clickNine);
    }else if(cur == 9){
        previous.removeEventListener('click', clickEight);
        next.removeEventListener('click', clickZero);
    }else if(cur == 0){
        previous.removeEventListener('click', clickNine);
        next.removeEventListener('click', clickOne);
    }
    cur = -1;
    active = false;
    }  
}
*/