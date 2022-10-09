let SpinText = document.querySelector('.spinning-text__img');
let start = 0;
let intern;
let mobMenu = document.querySelector('.mob-menu');
let menu = document.querySelector('.menu');
let burgerMenu1 = document.querySelector(".mob-menu__first");
let burgerMenu2 = document.querySelector(".mob-menu__second");

mobMenu.addEventListener('click', () =>{ 
menu.classList.toggle('open-and-close');
burgerMenu1.classList.toggle('mob-menu__open1');
burgerMenu2.classList.toggle('mob-menu__open2');
});


SpinText.addEventListener('mouseover', () =>{ 
    intern =  setInterval(spinning, 10)
});

function spinning() {
    start += -1;
    SpinText.style.transform = 'rotate(' + start + 'deg)';;
};

SpinText.addEventListener('mouseout', () => { 
    clearInterval(intern);
});

// -------------

function parallax() {
    var topText = document.querySelector(".top-text");
    topText.style.top = (50 + (event.clientY / 700)) + "%";
    topText.style.left = (50 + (event.clientX / 700)) + "%";
    
  
  }
  document.onmousemove = parallax();

