// ES5 Map Callback

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }


// ES2015 Arrow Functions Shorthand

const double = arr => arr.map(val => val * 2);


// Replace ALL functions with arrow functions

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  function squareAndFindEvens(numbers){
    var squares = numbers.map((num) =>{
      return num ** 2;
    });
    var evens = squares.filter((square) =>{
      return square % 2 === 0;
    });
    return evens;
  }