'use strict'

// function filterRangeInPlace(arr, a, b) {

// }

function filterRangeInPlace(range, leftBorder, rightBorder) {
    let temp = range.filter(
        elem => (leftBorder <= elem && elem <= rightBorder) );
    // range = temp; почему то при присвоении нового массив ведет себя как локальная переменная, а если без этой строчки то влияет на arr
    range.pop();
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]

// let arr = [1,2,3]
// let temp = arr;
// temp.pop();
// alert(arr);


