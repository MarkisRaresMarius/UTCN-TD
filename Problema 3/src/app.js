
document.getElementById('n').addEventListener('input',inputSum);


function inputSum() {

  var inputNumber = parseInt(document.getElementById('n').value);
  console.log(sum(inputNumber));

}


function sum(n) {

  if (typeof n === 'undefined ') return 'n is undefined ';
  //const checkType=n.value;
      if (isNaN(n))
        return 'not a number';


  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
