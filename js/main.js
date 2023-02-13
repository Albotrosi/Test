let lastActivate = 0;
let pushed = false;
document.getElementById('go').addEventListener('click', function() {
  if (pushed)
    return;
  pushed = true;
  const curDate = new Date();
  const wait = Math.max(
    60000 - (new Date().getTime() - lastActivate),
    5000
  );
  setTimeout(
    function() {
      document.querySelector('#main .active').classList.remove('active');
      document.querySelector('#main .yellow').classList.add('active');
      setTimeout(
        function() {
          document.querySelector('#main .active').classList.remove('active');
          document.querySelector('#main .red').classList.add('active');
          document.querySelector('#second .active').classList.remove('active');
          document.querySelector('#second .green').classList.add('active');
          setTimeout(
            function() {
              document.querySelector('#main .active').classList.remove('active');
              document.querySelector('#main .green').classList.add('active');
              document.querySelector('#second .active').classList.remove('active');
              document.querySelector('#second .red').classList.add('active');
              lastActivate = new Date().getTime();
              pushed = false;
            }, 15000
          );
        }, 5000
      );
    }, wait
  );
});