let colorFilter = document.getElementById('color-filter');
let items = document.querySelectorAll('.item');

colorFilter.addEventListener('click', function(event) {
  let color = event.target.getAttribute('data-color');
  if (color) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(color)) {
        items[i].classList.remove('hidden');
      } else {
        items[i].classList.add('hidden');
      }
    }
  }
});