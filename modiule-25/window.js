var name = 'kuddus';
function add (num1, num2){
    result = num1 + num2;
    var result = num1 + num2;
    console.log('result inside',result);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return result;
}
console.log('name outside', name);
var sum = add(13, 21);
console.log(sum);
console.log(result);