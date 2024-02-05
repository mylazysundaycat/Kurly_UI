
const center = document.querySelector('.Order_page-center');
const wing = document.querySelector('.Order_page-right');

const contentTop = center.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function(){
    if(window.scrollY >= contentTop){
        wing.classList.add('fixed');
    }else{
        wing.classList.remove('fixed');
    }
});