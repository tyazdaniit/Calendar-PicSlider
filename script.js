var currentIndex = 1;
var $ = document;

function displaySlide(imgIndex) {
  currentIndex = imgIndex;
  var slides = $.getElementsByClassName("slide");
  var dots = $.getElementsByClassName("dot");
  var slNo = $.getElementById("slideNo");
  if(currentIndex > slides.length) {
    currentIndex = 1;
  }
  if(currentIndex < 1) {
    currentIndex = slides.length;
  }
  for(var i = 0 ; i < slides.length ; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className = "dot active";
  slNo.innerText = currentIndex + "/" + slides.length;

}

displaySlide(1);