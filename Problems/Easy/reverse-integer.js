var reverse = function(x) {
    let sol = Math.abs(x).toString().split``.reverse().join``
    return sol >= 2**31 ? 0 : sol*Math.sign(x)
};