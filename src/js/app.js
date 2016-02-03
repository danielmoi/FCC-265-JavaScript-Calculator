var ViewModel = function () {

  var self = this;
  self.numVal = ko.observable();
  self.leftVal = ko.observable(0);
  self.leftValType = ko.observable(typeof self.leftVal());
  self.leftValStatus = ko.observable('start');

  self.rightVal = ko.observable(0);
  self.rightValType = ko.observable(typeof self.rightVal());
  self.rightValStatus = ko.observable('start');

  self.answer = ko.observable(0);

  self.opVal = ko.observable('+');
  self.currentOpVal = ko.observable('');





  $('.reveal').on('click', function () {
    console.log("click");
    $('.console').toggle();
  });


  $('.num').on('click', function () {
    self.numVal($(this).val());

    if (self.leftValStatus() === 'done') {

      if (self.rightValStatus() === 'extra') {
        switch (self.currentOpVal()) {
        case '*':
          self.rightVal(self.rightVal() * self.numVal());
          break;
        case '/':
          self.rightVal(self.rightVal() / self.numVal());
          break;
        }
      }

      if (self.rightValStatus() === 'progress') {
        self.rightVal(self.rightVal() + self.numVal());
      }

      if (self.rightValStatus() === 'start') {
        self.rightVal(self.numVal());
        self.rightValStatus('progress');
      }


    }

    if (self.leftValStatus() === 'progress') {
      self.leftVal(self.leftVal() + self.numVal());
    }
    if (self.leftValStatus() === 'start') {
      self.leftVal(self.numVal());
      self.leftValStatus('progress');
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


    if (self.rightValStatus() === 'progress' || self.rightValStatus() === 'extra') {
      self.rightVal(parseInt(self.rightVal(), 10));
      self.leftVal(parseInt(self.leftVal(), 10));

      switch (self.currentOpVal()) {
      case '+':
        self.opVal('+');
        self.answer(self.leftVal() + self.rightVal());
        self.rightValStatus('start');
        self.leftVal(self.answer());
        self.rightVal(0);
        break;
      case '-':
        self.opVal('-');
        self.answer(self.leftVal() - self.rightVal());
        self.rightValStatus('start');
        self.leftVal(self.answer());
        self.rightVal(0);
        break;
      case '*':
        self.rightValStatus('extra');
        break;
      case '/':
        self.rightValStatus('extra');
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

    self.opVal('+');

    self.answer(0);
  });


  $('.equals').on('click', function () {
    if (self.rightValStatus() === 'progress' || self.rightValStatus() === 'extra') {
      self.rightValStatus('done');
      self.rightVal(parseInt(self.rightVal(), 10));
      self.leftVal(parseInt(self.leftVal(), 10));

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
//    self.opVal('+');
  });









};

ko.applyBindings(new ViewModel());