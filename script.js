let arr = ["Я", "изучаю", "JavaScript"];

// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(arr.length, 0, "сложный", "язык");

alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

let arr2 = ["t", "e", "s", "t"];

alert( arr2.slice(-3, -1) ); 


