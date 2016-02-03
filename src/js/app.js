var calcString = '';

var numVal = '',

  leftValDone = false,
  rightValDone = false,


  answer = 0,

  leftVal = 0,
  rightVal = 0,
  opVal = '+',

  display_screen = $('.display_screen'),
  display_leftVal = $('.display_leftVal'),
  display_leftValType = $('.display_leftValType'),
  display_opVal = $('.display_opVal'),
  display_rightVal = $('.display_rightVal'),
  display_answer = $('.display_answer');



$(document).ready(function () {

  display_leftVal.val(leftVal);
  display_leftValType.val(typeof (leftVal));
  display_opVal.val(opVal);
  display_rightVal.val(rightVal);
  display_answer.val(answer);
  display_screen.val(0);

  $('.reveal').on('click', function () {
    console.log("click");
    $('.console').toggle();
  });


  $('.num').on('click', function () {
    numVal = $(this).val();
    if (leftValDone === false) {

      if (leftVal !== 0) {
        leftVal += numVal;
        display_screen.val(leftVal);
      }

      if (leftVal === 0) {
        leftVal = numVal;
        display_screen.val(leftVal);
      }
    }

    if (leftValDone === true) {
      if (rightVal !== 0) {
        rightVal += numVal;
        rightValDone = true;
        display_screen.val(rightVal);
      }
      if (rightVal === 0) {
        rightVal = numVal;
        rightValDone = true;
        display_screen.val(rightVal);
      }
    }

    display_leftVal.val(leftVal);
    display_leftValType.val(typeof (leftVal));

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
      opVal = '+';
      leftValDone = false;
      rightValDone = false;
      answer = 0;
      display_screen.val(answer);
    }

    if (rightValDone === true) {
      rightVal = parseInt(rightVal, 10);
      leftVal = parseInt(leftVal, 10);

      switch (opVal) {
      case '+':
        answer = leftVal + rightVal;
        display_screen.val(answer);

        break;
      case '-':
        answer = leftVal - rightVal;
        display_screen.val(answer);
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
      leftVal = answer;
      rightVal = 0;
    }


    display_leftVal.val(leftVal);
    display_leftValType.val(typeof (leftVal));
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
    rightValDone = false;
    opVal = '+';

    display_screen.val(answer);
    display_leftVal.val(leftVal);
    display_leftValType.val(typeof (leftVal));
    display_opVal.val(opVal);
    display_rightVal.val(rightVal);
    display_answer.val(answer);
  });









});