const hamburger = document.querySelector('.hamburger'),
      menu  = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});      

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const count = document.querySelectorAll('.skills__raiting-count'),
        lines = document.querySelectorAll('.skills__raiting-line span');
count.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;

})