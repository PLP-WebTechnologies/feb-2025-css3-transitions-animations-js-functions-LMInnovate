// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('usernameInput');
    const nameDisplay = document.getElementById('usernameDisplay');
    const saveBtn = document.getElementById('saveBtn');
    const animateBtn = document.getElementById('animateBtn');
    const box = document.getElementById('animatedBox');
  
    // Load name if saved
    const savedName = localStorage.getItem('username');
    if (savedName) {
      nameDisplay.textContent = savedName;
      nameInput.value = savedName;
    }
  
    // Save name to localStorage
    saveBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (name) {
        localStorage.setItem('username', name);
        nameDisplay.textContent = name;
        alert(`Welcome, ${name}! Your name has been saved.`);
      } else {
        alert('Please enter a valid name!');
      }
    });
  
    // Trigger animation
    animateBtn.addEventListener('click', () => {
      box.classList.remove('animate');
      void box.offsetWidth; // Reflow hack to restart animation
      box.classList.add('animate');
    });
  });
  