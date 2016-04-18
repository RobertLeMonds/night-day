$(document).ready(function() {
  $('#orb').click(function() {
    if ($('div').hasClass('sun')) {
      $('div').removeClass('sun').addClass('moon');
    } else {
      $('div').removeClass('moon').addClass('sun');
    }
  });
  $('#orb').click(function() {
    if ($('#sky').hasClass('day')) {
      $('#sky').removeClass('day').addClass('night');
    } else {
      $('#sky').removeClass('night').addClass('day');
    }
  });
  $('#orb').click(function() {
    if ($('#moonspot1').hasClass('visible')) {
      $('#moonspot1').removeClass('visible');
    } else {
      $('#moonspot1').addClass('visible');
    }
  });
});