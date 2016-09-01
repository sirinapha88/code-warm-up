// Factorial
// 
// Write a recursive and iterative solution for a finding the factorial of a number. 
// If you don't remember, the factorial of a non-negative integer n, denoted n! is the product of all positive integers less than . 
// For example, 5! = 5 * 4 * 3 * 2 * 1
// 

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  // This is it! Recursion!!
  return n * factorial(n - 1);
}

function factorial (input )
{
  var fact = 1;
  for (var x = input; x > 1; x--)
     fact *= x;
     
  return fact;
}


factorial(10);
