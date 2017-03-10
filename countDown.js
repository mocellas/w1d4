var countdownGenerator = function (x) {
  /* your code here */
  counter = x;
  return function() {
    if (counter > 0){
      console.log("T-minus", counter --)
    }else{
      console.log("Blast off", counter --)
    }
};
}
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!