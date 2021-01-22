var numbers = [43,22,45,25,55,66,98,12,23,11,44,56];

function getArraySum(numbers){
    sum = 0;
    for( var i =0;i<numbers.length;i++){
        element = numbers[i];
        sum =sum + element;
    }
    return sum;
}
var result = getArraySum(numbers);
console.log(result);