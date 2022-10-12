
let multiArray = [1,2,3,[4,5,[6,7,8,[9,10]]]]


const flattenArray =(nestedArray)=>{
    let flatArray = [];

    const handleFlat =(array)=>{
        for(let i = 0; i<array.length; i++){
            const value = array[i];
            if(Array.isArray(value)){
                handleFlat(value);
            }else{
                flatArray.push(value)
            }
        }
    }
    handleFlat(nestedArray);
    return flatArray;
}
console.log(flattenArray(multiArray));



