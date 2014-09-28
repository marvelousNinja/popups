$(document).ready(function() {
  $('#dialog').dialog({ 
    draggable: false,
    resizable: false,
    maxHeight: 300,
    width: 'auto',
    create: function() {
      $(this).css("maxWidth", "300px");
    }
  });
});