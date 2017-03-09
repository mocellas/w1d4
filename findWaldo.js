//The second argument/paramenter is expected to be a function
function findWaldo(arr, found){
  for(var i=0; i< arr.length; i++){
    if (arr[i] === "Waldo"){
      found();
    }
  }
}

function actionWhenFound() {
  console.log("Found him at" );
}
findWaldo(["Alince", "Bob", "Waldo", "Winston" ], actionWhenFound);