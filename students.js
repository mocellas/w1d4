var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 1, name: "zoidberg", age: 22 },
  { id: 1, name: "alex",     age: 22 },
  { id: 1, name: "alex",     age: 30 }
];

// sort by value

console.log(students.sort(function (a, b) {
  return a.value - b.value;
}));
// sort by value
students.sort(function (a, b) {
  return a.value - b.value;
  //console.log(students.sort)
});

// sort by name
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
    //console.log(students.sort)
  }

  // names must be equal
  return 0;
  //console.log(students.sort)
  //console.log(students.sort)
});