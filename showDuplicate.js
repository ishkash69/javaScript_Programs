// let array = ['a','b','c','a','d','a','c','b','b','b','d'] 
// function showDuplicate(){
//     let count = {}
//     array.forEach(item=>{
//        count[item]= (count[item]|| 0)+1;
//     })
//     return count
// }
// console.log(showDuplicate());

let array = ['a','b','c','e','a','d','a','c','b','b','b','d']
// function countDuplicates(arr){
//     let count ={}

//     for(let i of arr){
//         count[i]=(count[i]||0)+1    
//     }
//     return count
// }
// console.log(countDuplicates(array))
let count = {}
for(let i of array){
    if(count[i]){
         count[i]++
    }else{
        count[i]=1
    }
}
console.log(count)

