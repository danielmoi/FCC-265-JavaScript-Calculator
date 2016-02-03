$(document).ready(function () {

  var calcString = '';
  var answer = '';
  var display = $('.input');
  var display_calcString = $('.display_calcString');
  var display_answer = $('.display_answer');

  display.val(0);
  
  $('.reveal').on('click', function() {
    console.log("click");
    $('.console').toggle();
  });


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
    case 'C':
      calcString = calcString.slice(0, -1);
      display.val(calcString);
      break;

    default:
      calcString += buttonVal;
      display.val(calcString);

      console.log('calcString: ' + calcString);
    }
    
    display_calcString.val(calcString);
    display_answer.val(answer);








  }); // button
  




});