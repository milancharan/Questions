var newArr: number[] = []
var newArr2: number[] = []
function matrix(arr: number[]) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            var temp: number = arr[i][j] = arr[j][i]
            // console.log(temp);
        }
        newArr2.push(temp)
    }
    newArr.push(newArr2)
    console.log(newArr);

}

var arr: number[] = [[2, 4, 6], [7, 8, 9], [1, 1, 3]]
matrix(arr)