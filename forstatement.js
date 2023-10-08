var n = 5;
var i = 0;
var counter = 0;
 
for (i = 1; i <= n; i++)
  if (n % i === 0)
    counter++;
 
if (counter == 2)
  document.write('\nAngka ' + n + ' adalah bilangan prima');