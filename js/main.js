let  ball = document.querySelector ('.block')
let upButton = document.querySelector ('.left')
let downButton = document.querySelector('.text-3');
let leftButton = document.querySelector('.text-4');
let rightButton = document.querySelector('.top');

upButton.addEventListener('click', function(e){
  let goUp = ball.offsetTop;
  ball.style.top = goUp + 40 + "px";
  ball.style.left = goUp + 40 + "px";
});
downButton.addEventListener('click', function(e){
 let goDown = ball.offsetTop;
  ball.style.top = goDown + 40 + "px";
  ball.style.left = goDown - 40 + "px";
});
leftButton.addEventListener('click', function(e){
  let goLeft = ball.offsetLeft;
  ball.style.left = goLeft - 40 + "px";
  ball.style.top = goLeft - 40 + "px";
});
rightButton.addEventListener('click', function(e){
  let goRight = ball.offsetLeft;
  ball.style.left = goRight + 40 + "px";
  ball.style.top = goRight - 40 + "px";
});

window.addEventListener('keydown', function(e){

    console.log('key code - ', e.keyCode);
    if(e.keyCode == 38){
        let goUp = ball.offsetTop;
        console.log(goUp);
        ball.style.top = goUp - 40 + "px";
    }
    if(e.keyCode == 40){
        let goDown = ball.offsetTop
        ball.style.top = goDown + 40 + "px"
    }
    if(e.keyCode == 37){
        let goLeft = ball.offsetLeft
        ball.style.left = goLeft - 40 + "px"
    }
    if(e.keyCode == 39){
        let goRight = ball.offsetLeft
        ball.style.left = goRight + 40 + "px"
    }
})