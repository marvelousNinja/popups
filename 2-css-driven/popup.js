$(document).ready(function() {
  overlay = $('.overlay');
  overlay.css('display', 'block');
  
  overlay.click(function(event) {
    e = event || window.event
    if (e.target == this) {
      $(overlay).css('display', 'none')
    }
  });
  
  $('.close').click(function() {
    overlay.css('display', 'none')
  });
});