var x = 1;
if(x < 5) {
  console.log("hello");
}

// declared
function myCoolThing() {
  return 7;
}

// function expression
var example = function() {
  return 13;
}


// passing a function as a paramter
myOtherFunction(example);

// anonymous function
myOtherFunction(function(x) {
  // x is bound
});
