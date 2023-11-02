function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  // Example for receivesAFunction
receivesAFunction(function() {
    console.log("This is a callback function.");
  });
  
  // Example for returnsANamedFunction
  const namedFunc = returnsANamedFunction();
  namedFunc();
  
  // Example for returnsAnAnonymousFunction
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc();
  