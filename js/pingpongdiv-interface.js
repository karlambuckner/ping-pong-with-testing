var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#dividenumbers').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#div1').val());
    console.log(number1);
    var number2 = parseInt($('#div2').val());
    console.log(number2);
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.divide(number1, number2);
    console.log(output);
    $('#solution').append("<li>" + output+ "</li>");
  });
});
