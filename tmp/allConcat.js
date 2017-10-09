
var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#addnumbers').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#add').val());
    console.log(number1);
    var number2 = parseInt($('#add2').val());
    console.log(number2);
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(number1, number2);
    console.log(output);
    $('#solution').append("<li>" + output+ "</li>");
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#multiplynumbers').submit(function(event) {
    event.preventDefault();
    var number1 = $('#mul1').val();
    console.log(number1);
    var number2 = parseInt($('#mul2').val());
    console.log(number2);
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(number1, number2);
    console.log(output);
    $('#solution').append("<li>" + output+ "</li>");
  });
});

// $('#multiplynumbers')

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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
