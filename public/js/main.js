const inputText = document.getElementById('input-text');
const submitBtn = document.getElementById('submit-btn');
const outputDiv = document.getElementById('output-div');

submitBtn.addEventListener('click', () => {
  const text = inputText.value;
  fetch('/123', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  })
  .then(response => response.text())
  .then(data => {
    outputDiv.textContent = data;
  })
  .catch(error => {
    console.error(error);
  });
});