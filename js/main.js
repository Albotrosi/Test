let img = document.querySelectorAll('.click'),
  backPop = document.getElementById('backPop'),
    popUp = document.getElementById('popUp'),
    bigImg= document.getElementById('bigImg');
[].forEach.call(img, function(elem) {
  let src = elem.getAttribute('src');
  elem.addEventListener ('click', function() { 
    bigImg.setAttribute('src',src);
    backPop.style.display = "block";
  })
});
backPop.addEventListener ('click', function (elem){
  if(!(elem.target.closest("#popUp"))){
      backPop.style.display = 'none';
     }    
})