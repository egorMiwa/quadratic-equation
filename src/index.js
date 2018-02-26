module.exports = function solveEquation(equation) {
  var arr = equation.split(' '),
      first  = parseFloat(arr[0]),
      second   = parseFloat(arr[arr.lastIndexOf('*') - 2] + arr[arr.lastIndexOf('*') - 1]),
      third   = parseFloat(arr[arr.length - 2] + arr[arr.length - 1]),

      D   = Math.pow(second, 2) - 4 * first * third,
      x1  = Math.round((-second - Math.sqrt(D)) / (2 * first)),
      x2  = Math.round((-second + Math.sqrt(D)) / (2 * first));

  if(x1 > x2) {
    return [x2, x1];
  }
    return [x1,x2];
 }
