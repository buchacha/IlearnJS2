'use strict'

let dinner = {buckwheat: 1, sausage:2};

let recipeMap = new Map([
  [dinner, 500],
  ["помидор", 350],
  ["лук",    50]
]);

alert(typeof recipeMap);

let obj = Object.fromEntries(recipeMap);

alert(typeof obj);

objTrue = {param:200};

alert(typeof objTrue);

for (elem in obj) {
    alert(obj[elem]);
}

let objTrue2 = {
    param: 300,
    {buckwheat:1, sausage:2}: 125 //unexpected token
};

for (idx in objTrue2) {
    alert(typeof idx);
}



