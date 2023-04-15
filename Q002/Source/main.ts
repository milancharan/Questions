var array = [

    { FirstName: 'Rita', LastName: 'Sharma' },
    
    { FirstName: 'Meghna', LastName: 'patel' },
    
    { FirstName: 'Ritu', LastName: 'Patel' },
    
    { FirstName: 'Meghna', LastName: 'Patel' }
    
    ];

var newArr: Object[] = []
for(let i of array){
    if((i.LastName === "Patel") || (i.LastName === "patel")){
        newArr.push(i)
    }
}
var newArr2: Object[] = []
for(let i of newArr){
    var temp: Object = i
    for(let j=1; j<newArr.length; j++){
        if(temp.FirstName == j.FirstName){
            newArr2.push(temp)
        }
    }
}

console.log(newArr2);
console.log(newArr);
