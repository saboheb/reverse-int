module.exports = function reverse (n) {
    let nAbs = Math.abs(n);
    let str = String(nAbs);
    let revStr = str.split('').reverse().join('');
    return Number(revStr);
}