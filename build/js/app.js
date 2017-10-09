(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(number1, number2) {
  var output = number1 + number2;
  return output;
}

Calculator.prototype.subtract = function(number1, number2) {
  var output = number1 - number2;
  return output;
}

Calculator.prototype.multiply = function(number1, number2) {
  var output = number1 * number2;
  return output;
}

Calculator.prototype.divide = function(number1, number2) {
  var output = number1 / number2;
  return output;
}

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){

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

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/pingpong.js":1}]},{},[2]);
