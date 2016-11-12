$(function() {

  // var timer = setTimeout(3000);

  setTimeout(function(){
    $('.cover-heading').addClass('ghost-font');
    $('.cover-heading-bottom').addClass('font-erase');
  }, 4700);

  $('.hamburger').on('click', function(){  
    $('.dropdown').slideToggle(800);
  });

  if ($(window).width() > 769){// mobile sites aren't really that nice. Be honest.
    $('a').on('click', function(){
      $(this).addClass('ghost-font');
    });
    $(document).on('click', function(e){// cancels the ghost if clicked oustide 'a'
      if ($(e.target).is('a') === false) {
        $('a').removeClass('ghost-font');
      }
    });
  }

});


// var timer = setTimeout(2000);

// var alarm = {
//   remind: function(aMessage) {
//     alert(aMessage);
//     this.timeoutID = undefined;
//   },

//   setup: function() {
//     if (typeof this.timeoutID === "number") {
//       this.cancel();
//     }

//     this.timeoutID = window.setTimeout(function(msg) {
//       this.remind(msg);
//     }.bind(this), 1000, "Wake up!");
//   },

//   cancel: function() {
//     window.clearTimeout(this.timeoutID);
//     this.timeoutID = undefined;
//   }
// };
// window.onclick = function() { alarm.setup(); };
