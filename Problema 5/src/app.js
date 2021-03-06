var opSign;
document.getElementById("operationSign").innerHTML="";
document.getElementById('n').addEventListener('input1', input);

document.getElementById('m').addEventListener('input2', input);

document.getElementById('sum').addEventListener('click', changeSum);
document.getElementById('rest').addEventListener('click', changeRest);
document.getElementById('prod').addEventListener('click', changeProd);
document.getElementById('cat').addEventListener('click', changeCat);

function changeSum(){
    opSign="+"
}

function changeRest(){
    opSign="-"
}

function changeProd(){
    opSign="*"
}

function changeCat(){
    opSign="/"
}

function input() {
  var inputNumber1 = parseInt(document.getElementById('n').value);
  var inputNumber2 = parseInt(document.getElementById('m').value);
  sum(inputNumber1,inputNumber2);
}


function sum(n,m) {
  if (typeof n === 'undefined ') return 'first number is undefined ';
  if (typeof m === 'undefined ') return 'second number is undefined ';
  var sum = 0;
  sum += n+m;
  return sum;
}

function rest(n,m) {
  if (typeof n === 'undefined ') return 'first number is undefined ';
  if (typeof m === 'undefined ') return 'second number is undefined ';
  var rest = 0;
  rest += n-m;
  return rest;
}

function prod(n,m) {
  if (typeof n === 'undefined ') return 'first number is undefined ';
  if (typeof m === 'undefined ') return 'second number is undefined ';
  var prod = 0;
  prod += n*m;
  return prod;
}

function cat(n,m) {
  if (typeof n === 'undefined ') return 'first number is undefined ';
  if (typeof m === 'undefined ') return 'second number is undefined ';
  var cat = 0;
  cat += n/m;
  return cat;
}