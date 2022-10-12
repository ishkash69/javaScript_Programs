let array = [8,11,13,15,2]    
const multiplyElement = (arr) =>{
    let newArray = []

    for(let i = 0;i<arr.length;i++){

        if(i!=arr.length-1){
            newArray.push(arr[i]*arr[i+1])
        }
        else{
            newArray.push(arr[0]*arr[i])
        }
    }
    return newArray
    
}
console.log(multiplyElement(array))