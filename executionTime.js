// time start
console.time('timer');

var result = 1;

for (var i = 1; i <= 20; i++) {
    result *= i;
}

console.log('Result: %d', result);

// time end
console.timeEnd('timer');
