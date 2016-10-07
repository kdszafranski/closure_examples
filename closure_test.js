var a = "first a is this";
var thing = 3;

// logic stuff here
if(thing > 4) {

}


function A() {
  var a = "this is a";
  B();

  function B() {
    var b = "this is b";
    C();

    function C(b) {
      // local
      var c = "this is c";

      return function(b) {
        // b is bound
        var name = "Kris";
        // this does something
      }

      D();

      function D() {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  }
}

console.log(a);
A();
