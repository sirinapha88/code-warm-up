function factorial(n) {
  if (n === 0) {
    return 1;
  }
  // This is it! Recursion!!
  return n * factorial(n - 1);
}
factorial(10);
