function sortNumber(a,b) {
    return a - b;
}
var numArray = [1, 2, 5, 9, 10];
numArray.sort(sortNumber);
console.log(numArray.join(","));