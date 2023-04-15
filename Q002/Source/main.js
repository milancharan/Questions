var array = [
    { FirstName: 'Rita', LastName: 'Sharma' },
    { FirstName: 'Meghna', LastName: 'patel' },
    { FirstName: 'Ritu', LastName: 'Patel' },
    { FirstName: 'Meghna', LastName: 'Patel' }
];
var newArr = [];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var i = array_1[_i];
    if ((i.LastName === "Patel") || (i.LastName === "patel")) {
        newArr.push(i);
    }
}
var newArr2 = [];
for (var _a = 0, newArr_1 = newArr; _a < newArr_1.length; _a++) {
    var i = newArr_1[_a];
    var temp = i;
    for (var j = 1; j < newArr.length; j++) {
        if (temp.FirstName == j.FirstName) {
            newArr2.push(temp);
        }
    }
}
console.log(newArr2);
console.log(newArr);
