const Benchmark = require('benchmark');
const palindromeC = require('bindings')('palindrome.node');
const palindromeJs = require('./palindrome.js');
const suite = new Benchmark.Suite;
const str = 'a man a plan a cat a ham a yak a yam a hat a canal panama';

suite
  .add('Javascript palindrome', () => {
    palindromeJs(str);
  })
  .add('C palindrome', () => {
    palindromeC(str);
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function (a, b) {
    console.log('Fastest: ' + this.filter('fastest').map('name'));
    console.log('Slowest: ' + this.filter('slowest').map('name'));
  })
  .run({
    async: true
  });
