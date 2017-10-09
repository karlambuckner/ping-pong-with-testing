var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#subtractnumbers').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#sub').val());
    console.log(number1);
    var number2 = parseInt($('#sub2').val());
    console.log(number2);
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.subtract(number1, number2);
    console.log(output);
    $('#solution').append("<li>" + output+ "</li>");
  });
});
