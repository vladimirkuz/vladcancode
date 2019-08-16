
$(document).ready(function () {

  $('a').on('mouseenter', () => {
    $(event.currentTarget).addClass('hover');
  }).on('mouseleave', function() {
    $(event.currentTarget).removeClass('hover');
  });

  $('.image').on('mouseenter', event => {
    $(event.currentTarget).find('img').addClass('opacity');
    $(event.currentTarget).find('.img-title').fadeIn(10);
  }).on('mouseleave', event => {
    $(event.currentTarget).find('img').removeClass('opacity');
    $(event.currentTarget).find('.img-title').fadeOut(10);
  });

  $('#sleek').animate({right: '40%', opacity: '1'}, 1200);
  $('#simple').delay(800).animate({right: '40%', opacity: '1'}, 1200);
  $('#design').delay(1600).animate({right: '40%', opacity: '1'}, 1200);

})
