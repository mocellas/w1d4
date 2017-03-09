//The second argument/paramenter is expected to be a function
function findWaldo(arr, found){
  arr.forEach(function(element)
    {if(element === 'Waldo')
    {
      found(arr.indexOf(element));
    }
  });
}
function actionWhenFound(element) { //callback function
  console.log("Found Waldo at " + element);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);