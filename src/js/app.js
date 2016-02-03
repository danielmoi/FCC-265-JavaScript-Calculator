$(document).ready(function () {

  var calcString = '';
  var answer = '';
  var display = $('.input');

  display.val(0);



  $('button').on('click', function () {
    var buttonVal = $(this).text();
    console.log('buttonVal: ' + buttonVal + ' calcString: ' + calcString + ' answer: ' + answer);

    switch (buttonVal) {
    case 'AC':
      display.val(0);
      calcString = '';
      answer = '';
      break;
    case 'Ans':
      calcString += answer;
      display.val(calcString);
      break;
    case '=':
      answer = eval(calcString);
      calcString = answer;
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