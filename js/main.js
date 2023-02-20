first("button").addEventListener("click", function() {
  let val = first(".myInput").value.trim();
  if (!val) return; // ничего не ввели? Прервать.
  
  first(".textOutput").insertAdjacentHTML("beforeEnd", prepare(val));
  first(".myInput").value = '';
});

function prepare(text) {
  return "<li>" + text.split(/\s+/).map(wrap_span).join(" ") + "</li>";
  // в регулярном выражении, \s+ =один или много пробелов подряд
  
  /***/
  function wrap_span(word) {    
    let color = /[!@#$&*%]/.test(word) ? "red" : word.length > 3 ? "green" : "";

    return `<span style="color: ${ color }">${ word }</span>`;
  }
}
function first(str) {
  return document.querySelector(str);
}
document.getElementById('reset').onclick = function() {
  document.forms.my.reset();
  location.reload();
}