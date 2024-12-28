const nav = document.querySelector('.nav');

const about = document.querySelector('.about');
const navContent = document.querySelector('.nav-content');

const rotate = document.querySelector('.rotate');

window.addEventListener('scroll', function navEdit(){
    if ( window.scrollY > nav.offsetHeight + 150 ){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});

about.addEventListener('click', function dropdownAppear(){
    navContent.classList.toggle('show');
});

about.addEventListener('click', function (){
    rotate.classList.toggle("down");
});