$(function() {

  // const for repeated content
  const coverHeadingBottom = $('.cover-heading-bottom');
  const coverHeadingTop = $('.cover-heading-top');
  const coverHeading = $('.cover-heading');
  const triangle = $('.triangle-to-go');

  setTimeout(() => {
    coverHeading.addClass('ghost-font');
    coverHeadingBottom.addClass('font-erase');
    coverHeadingTop.addClass('bye-bye-border');
    coverHeadingBottom.addClass('bye-bye-border');
  }, 4700);

  setTimeout(() => {
    coverHeadingBottom.text(coverHeadingBottom.data("text-swap"));// takes the data from cover-heading-bottom as the new text
    coverHeadingBottom.removeClass('font-erase');
    coverHeadingBottom.addClass('ghost-font-slow');
  }, 7000);

  // may just leave the poster up instead
  // setTimeout(function(){
  //   $('video').addClass('.vid-stop');
  // }, 10000);

  $('.hamburger').on('click', () => {  
    $('.dropdown').fadeToggle(900, 'swing');
  });

  triangle.on('click', () => {
    triangle.addClass('hidden');
    $('.sidebar').addClass('sidebar-visible');
  });

  if ($(window).width() > 769){// mobile sites aren't really that nice. Be honest.
    $('a').on('click', () => {
      $(this).addClass('ghost-font');
    });
    $(document).on('click', e => {// cancels the ghost if clicked oustide 'a'
      if ($(e.target).is('a') === false) {
        $('a').removeClass('ghost-font');
      }
    });
  }

});
