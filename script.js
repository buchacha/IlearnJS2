let arr = ["Я", {param: "изучаю"}, "JavaScript"];

let arr_deep_copy = JSON.parse(JSON.stringify(arr));

arr_deep_copy.pop()

alert(arr_deep_copy)

alert(arr)


