var arr = [33, 30, 40, 567, 63, 70, 80, 97, 103, 110];
var newArr = [];
console.log(arr);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    if (i % 2 == 0) {
        newArr.push(i);
    }
}
console.log(newArr);
var sum = 0;
var avg = 0;
for (var _a = 0, newArr_1 = newArr; _a < newArr_1.length; _a++) {
    var i = newArr_1[_a];
    sum += i;
}
avg = sum / newArr.length;
console.log(avg);
var sqElem = [];
var temp = 0;
for (var _b = 0, newArr_2 = newArr; _b < newArr_2.length; _b++) {
    var i = newArr_2[_b];
    temp = i * i;
    sqElem.push(temp);
}
console.log(sqElem);
