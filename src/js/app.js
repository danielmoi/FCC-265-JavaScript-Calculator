$(document).ready(function () {

  var calcString = '';
  var answer = '';
  var display = $('.input');

  display.val(0);



  $('button').on('click', function () {
    var buttonVal = $(this).text();

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
    case '+/-':
      if (calcString.indexOf('-') === -1) {
        console.log("MINUS");
        calcString *= -1;
        display.val(calcString);
        break;
      }
      if (calcString.indexOf('-') === 0) {
        console.log("MINUS....");
        calcString *= -1;
        display.val(calcString);
      }
      break;
    case 'C':
      calcString = calcString.slice(0, -1);
      display.val(calcString);

      break;
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






    console.log('buttonVal: ' + buttonVal + ' calcString: ' + calcString + ' answer: ' + answer);


  });



});