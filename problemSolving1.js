const printNos = (number) => {
    if(number>0){

        printNos(number-1);
        console.log(number)
    }
}
console.log(printNos(10))