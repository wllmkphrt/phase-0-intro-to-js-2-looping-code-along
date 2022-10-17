function writeCards(array){
    const newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr[i] = `Thank you, ${array[i]}, for the wonderful surprise gift!`;
    }
    return newArr;
}
function countDown(num){
    for(let i = num; i >= 0; i--){
        console.log(i);
    }
}