// reactive navbar
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

// blurring effect at loading 
const bg = document.querySelector('.bg');

let load = 0; 

let int = setInterval(blurring, 10);

function blurring(){
    load++

    if ( load > 99 ){
        clearInterval(int)
    }

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}; 