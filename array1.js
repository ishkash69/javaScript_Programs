let arr = [12,24,45,50]; 
function returnGreater(value){
    return (parseInt(value.charAt(0))>parseInt(value.charAt(1))  ?value.charAt(0):value.charAt(1))
}
const arrOfStr = arr.map(num => {
    let a=returnGreater(String(num));
    
  return a;
});
console.log(arrOfStr);
 const arrOfNos = arrOfStr.map(str => {
     return Number(str);
 });
 console.log(arrOfNos)


