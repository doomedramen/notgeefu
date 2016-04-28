$(function () {
  $('[data-toggle-hover]').on('mouseenter mouseleave', function () {
    var selector = $(this).attr('data-toggle-hover');
    $(selector).toggleClass('hidden');
  });
  $('[data-toggle-click]').on('click', function () {
    var selector = $(this).attr('data-toggle-click');
    $(selector).toggleClass('hidden');
  });

});

