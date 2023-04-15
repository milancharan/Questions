var arr: number[] = [33, 30, 40 , 567, 63, 70, 80, 97, 103, 110]
var newArr: number[] = []
console.log(arr);

for(let i of arr) {
    if(i%2==0){
        newArr.push(i)
    }
}

console.log(newArr);

var sum: number = 0
var avg: number = 0
for(let i of newArr){
    sum += i
}
avg = sum / newArr.length
console.log(avg);

var sqElem: number[] = []
var temp: number = 0
for(let i of newArr){
    temp = i*i
    sqElem.push(temp)
}
console.log(sqElem);




