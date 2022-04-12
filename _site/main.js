$('.hamburger-button').click(function(){
    $('.right-menu, .left-menu, .drop-menu').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.drop-menu').click(function(){
    $('.right-menu, .left-menu, .drop-menu').toggleClass('active');
    });