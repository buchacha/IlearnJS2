arr = ["Bilbo", "Gandalf", "Nazgul"]

s = arr.forEach((item, index, array) => {
  alert(`${item} имеет позицию ${index} в ${array}`);
});

alert(arr) // Bilbo,Gandalf,Nazgul

alert(s) // undefined