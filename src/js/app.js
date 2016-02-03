var calcString = '';

var numVal = '',

  leftValDone = false,
  rightValDone = false,


  answer = '',

  leftVal = 0,
  rightVal = 0,
  opVal = '',

  display = $('.input'),
  display_leftVal = $('.display_leftVal'),
  display_opVal = $('.display_opVal'),
  display_rightVal = $('.display_rightVal'),
  display_answer = $('.display_answer');


$(document).ready(function () {


  display.val(0);

  $('.reveal').on('click', function () {
    console.log("click");
    $('.console').toggle();
  });


  $('.num').on('click', function () {
    numVal = $(this).val();
    if (leftValDone === false) {

      leftVal += numVal;
    }

    if (leftValDone === true) {
      rightVal += numVal;
      rightValDone = true;
    }


    display_leftVal.val(leftVal);
    display_rightVal.val(rightVal);
    display_answer.val(answer);


  });

  $('.op').on('click', function () {
    opVal = $(this).text();
    leftValDone = true;
    leftVal = parseInt(leftVal, 10);

    if (opVal === 'AC') {
      leftVal = 0;
      rightVal = 0;
      opVal = '';
      leftValDone = false;
      rightValDone = false;
    }


    display_leftVal.val(leftVal);
    display_opVal.val(opVal);
    display_rightVal.val(rightVal);
    display_answer.val(answer);

  });


  $('.equals').on('click', function () {
    if (rightValDone === true) {
      rightVal = parseInt(rightVal, 10);
      leftVal = parseInt(leftVal, 10);

      switch (opVal) {
      case '+':
        answer = leftVal + rightVal;
        break;
      case '-':
        answer = leftVal - rightVal;
        break;
      case '/':
        answer = leftVal / rightVal;
        break;
      case '*':
        answer = leftVal * rightVal;
        break;
      default:
        answer = "hello";
        break;
      }
    }
    
    leftVal = answer;
    rightVal = 0;
    
    display_leftVal.val(leftVal);
    display_opVal.val(opVal);
    display_rightVal.val(rightVal);
    display_answer.val(answer);
  });









});