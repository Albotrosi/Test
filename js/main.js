push = document.querySelector(".clickButton")
newtext = document.querySelector(".textOutput")
push.addEventListener('click',function(){
  let a = document.querySelector(".myInput").value;
  let b = document.querySelector(".myInput-2").value;
  let v = document.querySelector(".myInput-3").value;
  document.querySelector(".textOutput").innerHTML += prepare(a,b,v);
  document.querySelector(".textOutput-2").innerHTML += prepare(b);
  document.querySelector(".textOutput-3").innerHTML += prepare(v);
  document.querySelector(".myInput").value = '';
}) 
prepare = function (text){
  return text
    .split(' ')
    .map(word => {
      if (word.length === 0) {
        return word;
      }
      let color = '';
      if (word.length > 3) {
        color = 'green';
      }
      if (word.match(/[!@#$&*%]/)) {
        color = 'red';
      }
      return `<ul style="color: ${color}">${word}</ul>`;
    }).join(' ');
};
reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
  document.location.reload();
});