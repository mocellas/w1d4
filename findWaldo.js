//The second argument/paramenter is expected to be a function
function findWaldo(arr, found){
  for(var index=0; index < arr.length; index++){
    if (arr[index] === "Waldo"){
      found(index);
    }
  }
}
function actionWhenFound(element) {
  console.log("Found Waldo at " + element);
}

var arrayPanda = ["Alice", "Bob", "Waldo", "Winston" ]
findWaldo(arrayPanda, actionWhenFound);