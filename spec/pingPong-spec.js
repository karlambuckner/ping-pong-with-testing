var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('Calculator', function() {

var calculator;

  beforeEach(function() {
    calculator = new Calculator("red");
  });


  it('should test whether a Calculator has a color', function() {
    //Test content will go here.
    var calculator = new Calculator();
    expect(calculator.skin).toEqual();
  });

  it('should test whether a Calculator can add two numbers', function() {
    //Test content will go here.
    expect(calculator.add(1,3)).toEqual(4);
    expect(calculator.skin).toEqual("red");
  });

  it('should test whether a Calculator can subtract two numbers', function() {
    //Test content will go here.
    expect(calculator.subtract(12,3)).toEqual(9);
  });

  it('should test whether a Calculator can ping-pong works', function() {
    //Test content will go here.
    expect(calculator.pingPong(5)).toEqual([1, 2, 'ping',4,'pong']);
  });

});
