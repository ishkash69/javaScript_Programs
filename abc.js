// let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// function gString(length){
//     let password =[];
//     let arrLength = arr.length
//     for (let i = 0;i<length;i++){
//         let convert = arr.toString();
//          password += convert.charAt(Math.floor(Math.random()*arrLength )) ;
         
//     }
//     return password;
// }
// console.log(gString(6));    

let arr = [1,2,3,4,5,6];
// function removeItem( value){
// let removed = arr.filter(item=> {
//     return item!=value
// })
//     return removed 
// }
// let result = removeItem(1)
// console.log(result)

const removeItem =(value)=>{
    for (let i=0;i<arr.length;i++){
        if (arr[i]===value){
            arr.splice(i,1);
        }
    }
    console.log(arr)
}
console.log(removeItem(6))



