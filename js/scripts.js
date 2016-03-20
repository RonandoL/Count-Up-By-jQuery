$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($('input.countTo').val());
    var countBy = parseInt($('input.countBy').val());
    var output = [];

    $('#results').show();
    $('#countTo').append(countTo);
    $('#countBy').append(countBy);

    if (countBy < 0 || countTo < 0) {
      $('#results').empty();
      $('label').addClass('red');
      $('#results').addClass('red');
      var bad = $('#results').append('<h4>Please have your "Count By" number be greater than your "Count To" number.</h4>');
      return bad;
    }

    for (var i = countBy; i <= countTo; i += countBy) {
      output.push(i);
    }


    if (isNaN(countBy) && isNaN(countTo)) {
      $('#results').empty();
      $('label').addClass('red');
      $('#results').addClass('red');
      $('#results').append('<h4>Please enter numbers in fields above.</h4>');
    } else if (isNaN(countBy)) {
      $('#results').empty();
      $('.to').removeClass('red');
      $('.by').addClass('red');
      $('#results').addClass('red');
      $('#results').append('<h4>Please enter numbers in fields above.</h4>');
    } else if (isNaN(countTo)) {
      $('#results').empty();
      $('.by').removeClass('red');
      $('.to').addClass('red');
      $('#results').addClass('red');
      $('#results').append('<h4>Please enter numbers in fields above.</h4>');
    }else if (countBy > countTo) {
      $('#results').empty();
      $('.to').removeClass('red');
      $('.by').addClass('red');
      $('.to').removeClass('red');
      $('#results').addClass('red');
      $('.countBy').addClass('red');
      $('#results').append('<h4>Please have your "Count By" number be less than your "Count To" number.</h4>');
    } else {
      $('label').removeClass('red');
      $('.countBy').removeClass('red');
      $('#results').removeClass('red');
      $('#results').empty();
      $('#results').append('<h4>Count To: ' + countTo + '</h4>');
      $('#results').append('<h4>Count By: ' + countBy + '</h4>');

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
