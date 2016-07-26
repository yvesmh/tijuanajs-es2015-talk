/*jshint esversion: 6*/

var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for(;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
};

for(var n of fibonacci) {
  if(n > 1000) {
    break;
  }
  console.log(n);
}

function* idGenerator() {
  var index = 0;
  while(index < 3) {
    yield index++;
  }
}

var gen = idGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);