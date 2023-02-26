module.exports = function reverse (n) {
    let result = String(Math.abs(n)).split('').reverse().join('');
    return + result
  }