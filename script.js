const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  if (!username || !password || !email) {
    errorMsg.textContent = 'All Fields must be filled';
    errorMsg.classList.add('error');
  } else if (!email.includes('@')) {
    errorMsg.textContent = 'Email is invalid';
    errorMsg.classList.add('error');
  } else {
    errorMsg.textContent = 'No Error Found Congrats the user is logged in.';
    errorMsg.classList.remove('error');
    errorMsg.classList.add('success');
  }
});
