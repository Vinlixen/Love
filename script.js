const heartsContainer = document.querySelector('.hearts');
for (let i = 0; i < 100; i++) { 
  let heart = document.createElement('div');
  heart.innerText = '❤';
  heart.className = 'heart'; 
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
  heart.style.fontSize = `${Math.random() * 3 + 1}em`;
  heartsContainer.appendChild(heart);
}