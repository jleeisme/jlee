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



// window.onclick = function(event) {
//   if (!event.target.matches('a')) {

//     var dropdowns = document.getElementsByClassName("hamburger");
//     var bottomLinks = document.getElementByClassName("nav-link");
//     var i;
//     for (i = 0; i < dropdowns.length || bottomLinks.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('ghost-font')) {
//         openDropdown.classList.remove('ghost-font');
//       }
//     }
//   }
// }