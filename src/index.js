module.exports = function reverse (n) {
    n = n.toString();
    if (n < 0) return n.slice(1).split('').reverse().join('');
    return n.split('').reverse().join('');
}
  
