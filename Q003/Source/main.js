var newArr = [];
var newArr2 = [];
function matrix(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var temp = arr[i][j] = arr[j][i];
            newArr2.push(temp);
            newArr.push(newArr2);
            // console.log(temp);
        }
    }
    console.log(newArr);
}
var arr = [[2, 4, 6], [7, 8, 9], [1, 1, 3]];
matrix(arr);
