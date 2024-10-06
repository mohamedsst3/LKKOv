

const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;


function initializeSlider(){

 
    if(slides.length > 0){ //if there's images
        slides[slideIndex].classList.add("displaySlide");// show the first img
     intervalId =  setInterval(nextSlide, 5000); //turn on nextSlide func every 5sec
    }
    
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
     slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
       slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


document.addEventListener('DOMContentLoaded', initializeSlider)


let otherimages = document.querySelectorAll('.other-images img');

let MainImage = document.querySelector('.main-image img');


function ChangeMainImage(image) {

    MainImage.src = image.src

}


let phoneinpt = document.querySelector('#phone');

if(phoneinpt){
    phoneinpt.value = "+961 "

}

function OpenNavList() {
    let dropdownmenu = document.querySelector('#dropmenu');

    dropdownmenu.classList.toggle('opendropdown-menu')
    
}
