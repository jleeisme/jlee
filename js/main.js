$(function() {

  $('.hamburger').on('click', function(){  
    $('.dropdown').slideToggle(500);
  });

  $('a').on('click', function(){
    $(this).addClass('ghost-font');
  });

  $(document).on('click', function(e){
    if ($(e.target).is('a') === false) {
      $('a').removeClass('ghost-font');
    }
  });

});
