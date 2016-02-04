var ViewModel = function () {

  var self = this;
  self.numVal = ko.observable();
  self.leftVal = ko.observable('0');
  self.leftValType = ko.observable(typeof self.leftVal());
  self.leftValStatus = ko.observable('start');

  self.rightVal = ko.observable('0');
  self.rightValType = ko.observable(typeof self.rightVal());
  self.rightValStatus = ko.observable('start');

  self.extraVal = ko.observable('0');
  self.extraValType = ko.observable(typeof self.extraVal());


  self.answer = ko.observable('0');

  self.opVal = ko.observable('');
  self.currentOpVal = ko.observable('');





  $('.reveal').on('click', function () {
    console.log("click");
    $('.console').toggle();
  });


  $('.num').on('click', function () {
    self.numVal($(this).text());

    if (self.leftValStatus() === 'done') {

      if (self.rightValStatus() === 'progress' || self.rightValStatus() === 'extra') {
        switch (self.numVal()) {
        case '.':
          if (self.rightVal().indexOf('.') === -1) {
            console.log('finally');
            self.rightVal(self.rightVal() + self.numVal());
          }
          break;
        default:
          self.rightVal(self.rightVal() + self.numVal());
          break;
        }
      }

      if (self.rightValStatus() === 'start') {
        switch (self.numVal()) {
        case '.':
          self.rightVal(self.rightVal() + self.numVal());
          self.rightValStatus('progress');
          break;
        default:
          self.rightVal(self.numVal());
          self.rightValStatus('progress');
          break;
        }


      }
    }


    if (self.leftValStatus() === 'progress') {
      switch (self.numVal()) {
      case '.':
        if (self.leftVal().indexOf('.') === -1) {
          console.log('finally');
          self.leftVal(self.leftVal() + self.numVal());
        }
        break;
      case '+/-':
        if ((self.leftVal()).indexOf('-') === -1) {
          console.log('minus');
          self.leftVal(((self.leftVal()) * -1));
        }
        if (self.leftVal().charAt(0) === '-') {
          console.log('2');
          self.leftVal(self.leftVal().slice(1));
        }
        break;
      default:
        self.leftVal(self.leftVal() + self.numVal());
        break;
      }
    }

    if (self.leftValStatus() === 'start') {
      switch (self.numVal()) {
      case '.':
        self.leftVal(self.leftVal() + self.numVal());
        self.leftValStatus('progress');
        break;
      default:
        self.leftVal(self.numVal());
        self.leftValStatus('progress');
        break;
      }
    }



  });

  $('.op').on('click', function () {
    self.currentOpVal($(this).text());

    self.leftValStatus('done');

    if (self.rightValStatus() === 'start') {
      console.log(self.currentOpVal());
      switch (self.currentOpVal()) {
      case '+':
        self.opVal('+');
        break;
      case '-':
        self.opVal('-');
        break;
      case '*':
        self.opVal('*');
        break;
      case '/':
        self.opVal('/');
        break;
      }
    }

    if (self.rightValStatus() === 'extra') {
      switch (self.currentOpVal()) {
      case '*':
        self.rightVal(self.extraVal() * self.rightVal());
        self.answer(self.rightVal());
        break;
      case '/':
        self.rightVal(self.extraVal() / self.rightVal());
        self.answer(self.rightVal());
        break;
      }

    }


    if (self.rightValStatus() === 'progress') {
      self.rightVal(parseFloat(self.rightVal()));
      self.leftVal(parseFloat(self.leftVal()));

      switch (self.currentOpVal()) {
      case '+':
        self.opVal('+');
        self.answer(self.leftVal() + self.rightVal());
        self.rightValStatus('start');
        self.leftVal(self.answer());
        self.rightVal('0');
        break;
      case '-':
        self.opVal('-');
        self.answer(self.leftVal() - self.rightVal());
        self.rightValStatus('start');
        self.leftVal(self.answer());
        self.rightVal('0');
        break;
      case '*':
        self.rightValStatus('extra');
        self.extraVal(self.rightVal());
        self.rightVal('0');
        break;
      case '/':
        self.rightValStatus('extra');
        self.extraVal(self.rightVal());
        self.rightVal('0');
        break;
      default:
        self.answer('hello');
        break;
      }
    }


  });

  $('.ac').on('click', function () {
    self.leftVal(0);
    self.leftValStatus('start');

    self.rightVal(0);
    self.rightValStatus('start');

    self.extraVal('0');

    self.opVal('+');

    self.answer(0);
  });


  $('.equals').on('click', function () {
    if (self.rightValStatus() === 'extra') {
      switch (self.currentOpVal()) {
      case '*':
        if (self.opVal() === '+') {
          self.answer(self.extraVal() * self.rightVal() + self.leftVal());
        }
        if (self.opVal() === '-') {
          self.answer(self.extraVal() * self.rightVal() - self.leftVal());
        }
        break;
      case '/':
        if (self.opVal() === '+') {
          self.answer(self.extraVal() / self.rightVal() + self.leftVal());
        }
        if (self.opVal() === '-') {
          self.answer(self.extraVal() / self.rightVal() - self.leftVal());
        }
        break;
      }



    }

    if (self.rightValStatus() === 'progress') {
      self.rightValStatus('done');
      self.rightVal(parseFloat(self.rightVal()));
      self.leftVal(parseFloat(self.leftVal()));

      switch (self.opVal()) {
      case '+':
        self.answer(self.leftVal() + self.rightVal());
        break;
      case '-':
        self.answer(self.leftVal() - self.rightVal());
        break;
      case '/':
        self.answer(self.leftVal() / self.rightVal());
        break;
      case '*':
        self.answer(self.leftVal() * self.rightVal());
        break;
      default:
        self.answer('hello');
        break;
      }
    }
    if (self.rightVal() === 0) {
      self.answer(self.leftVal());
    }

    self.leftVal(self.answer());
    self.rightVal(0);
    self.rightValStatus('start');
    self.extraVal(0);
    //    self.opVal('+');
  });









};

ko.applyBindings(new ViewModel());