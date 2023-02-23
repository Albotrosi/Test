push = document.querySelector(".clickButton")
push.addEventListener('click',function(){
  let a = document.querySelector(".myInput").value;
  document.querySelector(".textOutput").innerHTML += prepare(a);
  document.querySelector(".myInput").value = '';

}) 
function prepare(text) {
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
}
reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
  document.location.reload();
});