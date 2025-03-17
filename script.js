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

// shihan dojos content switcher by button click 
const scheduleBtn1 = document.getElementById('btn1-schedule');
const scheduleBtn2 = document.getElementById('btn2-schedule');
const schedule1 = document.getElementById('schedules-container1');
const schedule2 = document.getElementById('schedules-container2');

function switchContent(activeBtn, inactiveBtn, showSchedule, hideSchedule) {
    activeBtn.classList.add("active");
    inactiveBtn.classList.remove("active");
    showSchedule.style.display = "flex";
    hideSchedule.style.display = "none";
}

scheduleBtn1.addEventListener("click", function () {
    switchContent(scheduleBtn1, scheduleBtn2, schedule1, schedule2);
});

scheduleBtn2.addEventListener("click", function () {
    switchContent(scheduleBtn2, scheduleBtn1, schedule2, schedule1);
});
