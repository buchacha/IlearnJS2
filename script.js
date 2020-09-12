alert([1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
})); // выводит что сравнивает но ничего не переставляет

function compareNumeric(a, b) {
  return (a > b) ? 1
  :(a == b) ? 0
  :-1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15