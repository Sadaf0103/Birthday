setInterval(() => {
  const balloon = document.createElement('div');
  balloon.textContent = '🎈';
  balloon.style.position = 'absolute';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.top = '100vh';
  balloon.style.fontSize = '2rem';
  balloon.style.animation = 'float 6s linear forwards';
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 6000);
}, 800);