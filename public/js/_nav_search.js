$(function () {

  var navSearch = $('#nav-search');

  var navSearchSpinner = navSearch.find('span');
  var navSearchInput = navSearch.find('input');

  navSearch.on('click', function () {
    $(this).find('input').focus();
  });

  navSearchInput.on('change keyup paste', function () {
    var current = 'U';
    var spinner = '';

    //start spinning
    navSearchSpinner.attr('data-icon', spinner);
    navSearchSpinner.addClass('spinner');

    setTimeout(function () {
      navSearchSpinner.attr('data-icon', current);
      navSearchSpinner.removeClass('spinner');
    }, 1000);

    //after result
    //$(this).attr('data-icon', current);
    //$(this).removeClass('spinner');

  });

});
