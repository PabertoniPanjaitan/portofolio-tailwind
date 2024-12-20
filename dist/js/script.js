// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// filter leaguage
let currentLanguage = 'en';

function toggleDarkMode(){
  const htmlClasses = document.documentElement.classList;
  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';
  } else {
    htmlClasses.remove('dark');
    localStorage.theme = 'light';
  }
}

function toggleLanguage() {
  const flagIcon = document.getElementById('flag-icon');
  // if (currentLanguage === 'en') {
  //   flagIcon.src = 'dist/img/league/indonesia.png';
  //   flagIcon.alt = 'Bahasa Indonesia';
  //   currentLanguage = 'id';
  //   // window.location.href='/id'
  // } else {
    //   flagIcon.src = 'dist/img/league/united-kingdom.png';
    //   flagIcon.alt = 'English';
    //   currentLanguage = 'en';
    //   // window.location.href='/en';
    // }
    
    if (flagIcon.src.includes('united-kingdom.png')){
      flagIcon.src = 'dist/img/league/indonesia.png';
      currentLanguage = 'en';
    }else {
      flagIcon.src = 'dist/img/league/united-kingdom.png';
      currentLanguage = 'id';
  }
}

// siuu
document.addEventListener('DOMContentLoaded', function() {
  const languageButton = document.getElementById('language-button');
  const flagIcon = document.getElementById('flag-icon');
  const greeting = document.getElementById('greeting');
  const description = document.getElementById('description');

  const content = {
    en: {
      greeting: 'Hello, Welcome!',
      description: 'This is an example of a multilingual site using Tailwind CSS.',
      flag: 'dist/img/League/united-kingdom.png',
      alt: 'English'
    },
    id: {
      greeting: 'Halo, Selamat Datang!',
      description: 'Ini adalah contoh situs multibahasa menggunakan Tailwind CSS.',
      flag: 'dist/img/League/indonesia.png',
      alt: 'Bahasa Indonesia'
    }
  };

  let currentLanguage = 'en';

  function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
    updateContent();
  }

  function updateContent() {
    greeting.textContent = content[currentLanguage].greeting;
    description.textContent = content[currentLanguage].description;
    flagIcon.src = content[currentLanguage].flag;
    flagIcon.alt = content[currentLanguage].alt;
  }

  languageButton.addEventListener('click', toggleLanguage);

  // Set default language content
  updateContent();
});



