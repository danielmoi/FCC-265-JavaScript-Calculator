$(document).ready(function () {

  var calcString = '';
  var answer = '';
  var display = $('.input');

  display.val(0);



  $('button').on('click', function () {
    var buttonVal = $(this).text();

    switch (buttonVal) {
    case '=':
      answer = eval(calcString);
      console.log('answer: ' + answer);
      display.val(answer);
//      calcString = '';
      break;
    default:
      calcString += buttonVal;
      display.val(calcString);

      console.log('calcString: ' + calcString);
    }








  });



});