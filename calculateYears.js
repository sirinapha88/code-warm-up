function calculateYears(principal, interest, tax, desired) {
 var current = principal;
 var years = 0;
 while (current < desired) {
   var earnings = current*interest;
   var yearTax = earnings*tax;
   current += earnings-yearTax;
   years += 1;
 }
 return years;
}