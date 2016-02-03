var calcString = '';

var numVal = '',

  leftValStatus = 'start',
  rightValStatus = 'start',

  answer = 0,

  leftVal = 0,
  rightVal = 0,
  opVal = '+',

  display_screen = $('.display_screen'),

  display_leftVal = $('.display_leftVal'),
  display_leftValType = $('.display_leftValType'),
  display_leftValStatus = $('.display_leftValStatus'),

  display_opVal = $('.display_opVal'),

  display_rightVal = $('.display_rightVal'),
  display_rightValType = $('.display_rightValType'),
  display_rightValStatus = $('.display_rightValStatus'),


  display_answer = $('.display_answer');



$(document).ready(function () {

  display_screen.val(answer);

  display_leftVal.text(leftVal);
  display_leftValType.text(typeof (leftVal));
  display_leftValStatus.text(leftValStatus);

  display_opVal.text(opVal);

  display_rightVal.text(rightVal);
  display_rightValType.text(typeof (rightVal));
  display_rightValStatus.text(rightValStatus);

  display_answer.text(answer);

  $('.reveal').on('click', function () {
    console.log("click");
    $('.console').toggle();
  });


  $('.num').on('click', function () {
    numVal = $(this).val();

    if (leftValStatus === 'done') {

      if (rightValStatus === 'extra') {
        switch (opVal) {
        case '*':
          rightVal *= numVal;
          break;
        case '/':
          rightVal /= numVal;
          break;
        }
      }


      if (rightValStatus === 'progress') {
        rightVal += numVal;
        display_screen.val(rightVal);
      }
      if (rightValStatus === 'start') {
        rightVal = numVal;
        rightValStatus = 'progress';
        display_screen.val(rightVal);
      }


    }

    if (leftValStatus === 'progress') {
      leftVal += numVal;
      display_screen.text(leftVal);
    }
    if (leftValStatus === 'start') {
      leftVal = numVal;
      leftValStatus = 'progress';
      display_screen.text(leftVal);
    }






    display_leftVal.text(leftVal);
    display_leftValType.text(typeof (leftVal));

    display_rightVal.text(rightVal);
    display_answer.text(answer);


  });

  $('.op').on('click', function () {
    opVal = $(this).text();

    if (opVal === 'AC') {
      leftVal = 0;
      leftValStatus = 'start';

      rightVal = 0;
      rightValStatus = 'start';

      opVal = '+';

      answer = 0;

      display_screen.val(answer);

      display_leftVal.text(leftVal);
      display_leftValType.text(typeof (leftVal));
      display_leftValStatus.text(leftValStatus);

      display_opVal.text(opVal);

      display_rightVal.text(rightVal);
      display_rightValType.text(typeof (rightVal));
      display_rightValStatus.text(rightValStatus);

      display_answer.text(answer);
    }

    leftValStatus = 'done';
    leftVal = parseInt(leftVal, 10);



    if (rightValStatus === 'progress' || rightValStatus === 'extra') {
      rightVal = parseInt(rightVal, 10);
      leftVal = parseInt(leftVal, 10);

      switch (opVal) {
      case '+':
        answer = leftVal + rightVal;
        display_screen.text(answer);
        leftVal = answer;
        rightVal = 0;
        break;
      case '-':
        answer = leftVal - rightVal;
        display_screen.text(answer);
        leftVal = answer;
        rightVal = 0;
        break;
      case '*':
        rightValStatus = 'extra';
        break;
      case '/':
        rightValStatus = 'extra';
        break;
      default:
        answer = "hello";
        break;
      }
    }



    display_leftVal.text(leftVal);
    display_leftValType.text(typeof (leftVal));
    display_opVal.text(opVal);
    display_rightVal.text(rightVal);
    display_answer.text(answer);

  });


  $('.equals').on('click', function () {
    if (rightValStatus === 'progress' || rightValStatus === 'extra') {
      rightValStatus = 'done';
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
    rightValStatus = 'start';
    opVal = '+';

    display_screen.text(answer);

    display_leftVal.text(leftVal);
    display_leftValType.text(typeof (leftVal));
    display_leftValStatus.text(leftValStatus);

    display_opVal.text(opVal);

    display_rightVal.text(rightVal);
    display_rightValType.text(typeof (rightVal));
    display_rightValStatus.text(rightValStatus);

    display_answer.text(answer);
  });









});