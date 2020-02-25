var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if (n > $('.mySlides').length) { slideIndex = 1 }
  if (n < 1) { slideIndex = $('.mySlides').length }
  for (i = 0; i < $('.mySlides').length; i++) {
    $('.mySlides')[i].style.display = "none";
  }
  for (i = 0; i < $('.thumbnail-item').length; i++) {
    $('.thumbnail-item')[i].className = $('.thumbnail-item')[i].className.replace(" active", "");
  }
  $('.mySlides')[slideIndex - 1].style.display = "block";
  $('.thumbnail-item')[slideIndex - 1].className += " active";
}

$('.next').click(function () {
  showSlides(slideIndex += 1)
})
$('.prev').click(function () {
  showSlides(slideIndex -= 1)
})
