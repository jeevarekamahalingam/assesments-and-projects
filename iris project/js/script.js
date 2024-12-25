const hamburger=document.getElementsByClassName('hamburger')[0];
console.log("Hi");
const navList=document.getElementsByClassName('navbar')[0];
const prod=document.getElementsByClassName('nav-op')[0];
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active'); // Toggle 'active' class
    prod.classList.toggle('active');
  });


function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
} 

const container = document.querySelector('.animebg');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY-1200; 
  container.style.transform = `translateX(-${scrollPosition*0.5}px)`
});