$(function() {

  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    var elementId = $(this).data('scroll');
    var elementOffset = $(elementId).offset().top;
    $('html, body').animate({
      scrollTop: elementOffset
    }, 700);
    
  });

 
  
});