$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($('.countTo').val());
    var countBy = parseInt($('.countBy').val());
    var output = [];

    var red = function() {
      $('label').addClass('red');
      $('input').addClass('red');
      $('#results').addClass('red');
    }

    var notRed = function() {
      $('label').removeClass('red');
      $('input').removeClass('red');
      $('#results').removeClass('red');
    }

    $('#results').show();

    if (countBy < 0 || countTo < 0) {
      $('#results').empty();
      $(red);  // turns text and input red
      var bad = $('#results').append('<h4>Please have both numbers greater than zero and have your "Count By" number be greater than your "Count To" number.</h4>');
      return bad;
    }

    for (var i = countBy; i <= countTo; i += countBy) {
      output.push(i);
    }

    if (isNaN(countBy) && isNaN(countTo)) {  // if both are negative
      $('#results').empty().append('<h4>Please enter numbers in fields above.</h4>');
      $(red);
    } else if (isNaN(countBy)) {  // if countBy is empty
      $('#results').empty().addClass('red').append('<h4>Please enter numbers in fields above.</h4>');
      $('.to').removeClass('red');
      $('.by').addClass('red');
    } else if (isNaN(countTo)) {  // if countTo is empty
      $('#results').empty().addClass('red').append('<h4>Please enter numbers in fields above.</h4>');
      $('.to').addClass('red');
      $('.by').removeClass('red');
    } else if (countBy > countTo) {
      $('#results').empty().addClass('red').append('<h4>Please have your "Count By" number be less than your "Count To" number.</h4>');
      $('.to').removeClass('red');
      $('.by').addClass('red');
      $('.countBy').addClass('red');
    } else {
      $('label').removeClass('red');
      $('.countBy').removeClass('red');
      $('#results').removeClass('red').empty().append('<h4>Count To: ' + countTo + '</h4><h4>Count By: ' + countBy + '</h4>');

      output.forEach(function(number) {
        $('#results').append(number + ', ');
      });
    }
  });


  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });
});
