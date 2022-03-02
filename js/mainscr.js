// Slider
const sliderImgs = document.querySelectorAll('.slider-list'),
      sliderWrp = document.querySelector('.section-slider__slider--img'),
      dots = document.querySelectorAll('.dot');

      let index = 0;
const activeSlide = (n) =>{
    for(slide of sliderImgs){
        slide.classList.remove('slider-list--active', 'slider-scroll-anim', 'list-row-img' )
    }
    sliderImgs[n].classList.add('slider-list--active', 'slider-scroll-anim', 'list-row-img');
}   
const activeDots = (n) =>{
    for(dot of dots){
        dot.classList.remove('active_dot')
    }
    dots[n].classList.add('active_dot');
}   
const nextSlide = () =>{
    if(index == sliderImgs.length - 1){
        index = 0;
        activeSlide(index);
        activeDots(index)
    }else{
        index++;
        activeSlide(index);
        activeDots(index);
    }
}
sliderWrp.addEventListener('click', nextSlide);
dots.forEach((item, indexDot) => {
    item.addEventListener('click', ()=>{
        clearInterval(sliderInterval);
        // setInterval(nextSlide, 5000);
        index = indexDot;
        console.log(indexDot);
        for(dot of dots){
            dot.classList.remove('active_dot');
        }
        item.classList.add('active_dot');
        activeSlide(index);
    })
})
let sliderInterval = setInterval(nextSlide, 2500);

