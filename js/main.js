let  ball = document.querySelector ('.block')
let upButton = document.querySelector ('.left')
let downButton = document.querySelector('.text-3');
let leftButton = document.querySelector('.text-4');
let rightButton = document.querySelector('.top');
let cat = document.querySelector(".cat");
upButton.addEventListener('click', function(e){
  let goUp = ball.offsetTop;
  ball.style.top = (parseInt(ball.style.top||0)+20)+"px";
  ball.style.left = (parseInt(ball.style.left||400)+20)+"px";

  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  if (elementLeft === 300 && elementTop === 300){
    alert("не чіпай кицю,вона едина тут схожа на звіра)")
  }
  else{
    console.log('123')
  }
});
downButton.addEventListener('click', function(e){
 let goDown = ball.offsetTop;
  ball.style.top = (parseInt(ball.style.top||0)+20)+"px";
  ball.style.left = (parseInt(ball.style.left||400)-20)+"px";
  
  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  if (elementLeft === 300 && elementTop === 300){
    alert("не чіпай кицю,вона едина тут схожа на звіра)")
  }
  else{
    console.log('123')
  }

});
leftButton.addEventListener('click', function(e){
  let goLeft = ball.offsetLeft;
  ball.style.left = (parseInt(ball.style.left||400)-20)+"px";
  ball.style.top = (parseInt(ball.style.top||0)-20)+"px";
  
  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  if (elementLeft === 300 && elementTop === 300){
    alert("не чіпай кицю,вона едина тут схожа на звіра)")
  }
  else{
    console.log('123')
  }
});
rightButton.addEventListener('click', function(e){
  let goRight = ball.offsetLeft;
  ball.style.left = (parseInt(ball.style.left||400)+20)+"px";
  ball.style.top = (parseInt(ball.style.top||0)-20)+"px";
  
  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  if (elementLeft === 300 && elementTop === 300){
    alert("не чіпай кицю,вона едина тут схожа на звіра)")
  }
  else{
    console.log('123')
  }
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