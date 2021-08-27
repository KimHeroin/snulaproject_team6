var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function cardnews_reset(){
  all_page = document.querySelectorAll(".cardnews_folder");
  for (let i = 0; i < all_page.length; i++) {
    all_page[i].style.display = "none";
  }
}

function show_cardnews0() {
  cardnews_reset();
  var Folder_0 = document.getElementById("folder_0");
  Folder_0.style.display = "block";
  
}


function show_cardnews1() {
  cardnews_reset();
  var Folder_1 = document.getElementById("folder_1");
  Folder_1.style.display = "block";
  
}

function show_cardnews2() {
  cardnews_reset();
  var Folder_2 = document.getElementById("folder_2");
  Folder_2.style.display = "block";
  
}

function show_cardnews3() {
  cardnews_reset();
  var Folder_3 = document.getElementById("folder_3");
  Folder_3.style.display = "block";
  
}

function show_cardnews4() {
  cardnews_reset();
  var Folder_4 = document.getElementById("folder_4");
  Folder_4.style.display = "block";
  
}

function pageUp() {
  document.body.scrollTop = 0;
}