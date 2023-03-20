let  ball = document.querySelector ('.block')
let upButton = document.querySelector ('.left')
let downButton = document.querySelector('.text-3');
let leftButton = document.querySelector('.text-4');
let rightButton = document.querySelector('.top');
let cat = document.querySelector(".cat");

ball.addEventListener('click', function(e){
  let target = e.target.closest ('.block')
  let targetCoords = target.getBoundingClientRect();
  let xCoord = e.clientX - targetCoords.left;
  let yCoord = e.clientY - targetCoords.top;

  if (xCoord === 0 && yCoord === 48){
  let goUp = ball.offsetTop;
  ball.style.top = (parseInt(ball.style.top||0)-20)+"px";
  ball.style.left = (parseInt(ball.style.left||400)+20)+"px";

  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  }
  if (elementLeft === 300 && elementTop === 300){
    alert("не чіпай кицю,вона едина тут схожа на звіра)")
  }
  else{
    console.log('123')
  }
});
ball.addEventListener('click', function(e){
  let target = e.target.closest ('.block')
  let targetCoords = target.getBoundingClientRect();
  let xCoord = e.clientX - targetCoords.left;
  let yCoord = e.clientY - targetCoords.top;
  if (xCoord === 48 && yCoord === 2){
  let goDown = ball.offsetTop;
  ball.style.top = (parseInt(ball.style.top||0)+20)+"px";
  ball.style.left = (parseInt(ball.style.left||400)-20)+"px";
  
  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  }
  if (elementLeft === 300 && elementTop === 300){
    alert("не чіпай кицю,вона едина тут схожа на звіра)")
  }
  else{
    console.log('123')
  }

});
document.addEventListener('click', function(e){

  let target = e.target.closest ('.block')
  let targetCoords = target.getBoundingClientRect();
  let xCoord = e.clientX - targetCoords.left;
  let yCoord = e.clientY - targetCoords.top;
  console.log(xCoord,yCoord)
  
  if (xCoord === 4 && yCoord === 4){
  let goLeft = ball.offsetLeft;
  ball.style.left = (parseInt(ball.style.left||400)-20)+"px";
  ball.style.top = (parseInt(ball.style.top||0)+20)+"px";
  
  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  }
  if (elementLeft === 300 && elementTop === 300){
    alert("не чіпай кицю,вона едина тут схожа на звіра)")
  }
  else{
    console.log('123')
  }
});
ball.addEventListener('click', function(e){
  let target = e.target.closest ('.block')
  let targetCoords = target.getBoundingClientRect();
  let xCoord = e.clientX - targetCoords.left;
  let yCoord = e.clientY - targetCoords.top;
  if (xCoord === 48 && yCoord === 48) {
  let goRight = ball.offsetLeft;
  ball.style.left = (parseInt(ball.style.left||400)-20)+"px";
  ball.style.top = (parseInt(ball.style.top||0)-20)+"px";
  
  let elementLeft = ball.offsetLeft;
  let elementTop = ball.offsetTop;
  }
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