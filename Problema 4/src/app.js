document.getElementById('n').addEventListener('input', inputFibonacci);

function inputFibonacci() {

  var inputNumber = parseInt(document.getElementById('n').value);
  getFibonacci(inputNumber);


}

function getFibonacci(number){
    var f = [];
    var j = 0;
    let n1 = 0, n2 = 1, nextTerm;
    if (isNaN(number)) return 'not allowed';
    if ((number>10) || (number<1)) return 'not allowed';

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++)
    {

        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        f[j]=n1;
        j++;
    }
   return f
}