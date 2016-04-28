$(function () {
  $('#nav-search').find('span').on('click', function () {
    //var current = $(this).attr('data-icon');
    //console.log('current code is', current);
    var spinner = '';
    $(this).attr('data-icon', spinner);
    $(this).addClass('spinner');
  });
});
