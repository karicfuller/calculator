var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var add = function(number1, number2) {
  return number1 + number2;
};

saySomething("hi");

add(3, 5);

var result = add(3, 5);
alert(result);

var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var add = function(number1, number2) {
  return number1 + number2;
};

saySomething("The sum is " + add(3,5) + ".");
