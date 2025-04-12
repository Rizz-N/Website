const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Toggle UI
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Register
const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = signUpForm.querySelector('input[placeholder="First Name"]').value;
  const lastName = signUpForm.querySelector('input[placeholder="Last Name"]').value;
  const email = signUpForm.querySelector('input[placeholder="Email"]').value;
  const password = signUpForm.querySelector('input[placeholder="Password"]').value;

  // localStorage
  const userData = {
    fullName: `${firstName} ${lastName}`,
    email,
    password
  };

  localStorage.setItem('user', JSON.stringify(userData));
  alert('Register successful! You can now log in.');
  container.classList.remove("right-panel-active");
});

// Login
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const usernameInput = signInForm.querySelector('input[placeholder="Username"]').value;
  const passwordInput = signInForm.querySelector('input[placeholder="Password"]').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && (usernameInput === storedUser.email || usernameInput === storedUser.fullName) && passwordInput === storedUser.password) {
    // alert('Login successful!');
    window.location.href = "dashboard.html";
  } else {
    alert('Login failed! Please check your credentials.');
  }
});
