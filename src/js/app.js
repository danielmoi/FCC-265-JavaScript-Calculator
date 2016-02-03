$(document).ready(function () {

  var calcString = '';

  var answer = '';
  
  var leftVal = '';
  var rightVal = '';
  
  var display = $('.input');
  var display_calcString = $('.display_calcString');
  var display_answer = $('.display_answer');

  display.val(0);

  $('.reveal').on('click', function () {
    console.log("click");
    $('.console').toggle();
  });


  $('.num').on('click', function () {
    var leftVal = $(this).text();


  });

  $('.op').on('click', function () {
    switch(operator) {
      case '+':
        answer = leftVal + rightVal;
        break;
      case '-':
        answer = leftVal - rightVal;
        break;
      case '*':
        answer = leftVal * rightVal;
        break;
      case '/':
        answer = leftVal / rightVal;
        break;
      default:
        answer = "hello";
    }

  });
  
  
  
  
  
  display_calcString.val(calcString);
  display_answer.val(answer);















});