var calcString = '';

var numVal = '',

  leftValDone = false,
  rightValDone = false,


  answer = '',

  leftVal = '',
  rightVal = '',
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
    numVal = $(this).text();
    console.log(numVal);
    if (leftValDone === false) {

      leftVal += numVal;
    }

    if (leftValDone === true) {
      rightVal += numVal;
    }


    display_leftVal.val(leftVal);
    display_rightVal.val(rightVal);
    display_answer.val(answer);


  });

  $('.op').on('click', function () {
    opVal = $(this).text();
    console.log('on clicked: ' + opVal);
    leftValDone = true;
    display_opVal.val(opVal);

    switch (opVal) {
    case '=':
      console.log('FINALLY');
      answer = leftVal;
      break;
    case '+':
      console.log('plus');
      break;
    case '-':
      console.log('minus');
      break;
    case '/':
      console.log('divide');
      break;
    default:
      answer = "hello";
      break;
    }
    display_leftVal.val(leftVal);
    display_opVal.val(opVal);
    display_rightVal.val(rightVal);
    display_answer.val(answer);

  });









});