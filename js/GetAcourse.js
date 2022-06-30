//Timer
const today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + (today.getMonth() === 11 ? (1) : (2))).padStart(2, '0'); 
let yyyy = today.getFullYear();
let deadLine = yyyy + '-'+ mm + '-' + dd;
function getTimeRemaning(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}
function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    } else 
    return num;
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds');
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock(){
        const t = getTimeRemaning(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0 ){
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer-boxes', deadLine);

//OVERLAY

const overlayShow = document.querySelector('.header-section__timer__registr');
const overlayClose = document.querySelector('.back');
const overlay = document.querySelector('.registation__overlay');
function openCloseOverlay(){
    overlay.classList.toggle('registation__overlay--active');
    if(!overlay.classList.contains('registation__overlay--active')){
        overlay.classList.add('close-overlay-animation');
    }else{overlay.classList.remove('close-overlay-animation');}
}
overlayShow.addEventListener('click', openCloseOverlay);
overlayClose.addEventListener('click', openCloseOverlay);

document.addEventListener('keydown', (event) => { 
    if (event.code === 'Escape'){
        openCloseOverlay();
}});

//Radio
const radioMale = document.querySelector('.rad-male');
const radioFemale = document.querySelector('.rad-female');
const radio = document.querySelectorAll('.radio-input-sex');
function radioUnactiveBtn(){
    radio.forEach((e)=>{
        if(e.classList.contains('active-radio-btn')){
            e.classList.remove('active-radio-btn');
        }
    })
}
function radioActiveBtn(num){
    radio[num].classList.add('active-radio-btn');
}
radioMale.addEventListener('click', ()=>{
    radioUnactiveBtn();
    radioActiveBtn(0);
});
radioFemale.addEventListener('click', ()=>{
    radioUnactiveBtn();
    radioActiveBtn(1);
});