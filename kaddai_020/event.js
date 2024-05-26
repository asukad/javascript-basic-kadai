const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {  
  text.remove();  
  const h2 = document.createElement('h2');
  h2.textContent = 'ボタンをクリックしました';
  document.body.prepend(h2);  
})
