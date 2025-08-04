window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const intro = document.querySelector('.intro');
  const logo = document.getElementById('logo');
  const end= document.querySelector('.end');
  // Optional: make sure things are hidden initially
  preloader.style.display = 'flex';
  intro.style.display = 'none';
  logo.style.display = 'none';
 end.style.display = 'none';
  // Step 1: Fade out preloader after 2s
  setTimeout(() => {
    preloader.classList.add('fade-out');
  }, 2000);

  // Step 2: Hide preloader, show intro and logo + fade in
  setTimeout(() => {
    preloader.style.display = 'none';
    intro.style.display = 'flex'; // should match CSS layout
    logo.style.display = 'block';
    end.style.display = 'flex'; // Show the end section
    // Then fade in
    intro.classList.add('show');
    logo.classList.add('show');
    console.log("Showing end section");
console.log(end);
    end.classList.add('show');

    document.body.style.overflow = 'auto';
  }, 3000); // total: 1s fade + 2s wait
});
const ham = document.querySelector('.ham');
const offScreen = document.querySelector('.off-screen');

ham.addEventListener('click', () => {
  ham.classList.toggle('ham-menu');
  offScreen.classList.toggle('off-screen-active');
  if (offScreen.classList.contains('off-screen-active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});