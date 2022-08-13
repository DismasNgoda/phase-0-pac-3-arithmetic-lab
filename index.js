function add(a, b){
    var c = a+b;
    return c;
  }
 add(2,2);
function subtract(a, b){
    var c = a-b;
    return c;
};
subtract(3-1);
function multiply(a, b){
    var c = a*b;
    return c;
};
multiply(2,3);
function divide(a, b){
    var c = a/b;
    return c;
};
divide(6,2);

let n = 0;

function increment(n){
  return n +=1;
}

function decrement(n){
  return n -=1;
};

function makeInt(a) {
    const parsed = parseInt(a, 10);
    return parsed;
  };
function preserveDecimal(n){
  const parsed = parseFloat(n);
  return parsed;
}

