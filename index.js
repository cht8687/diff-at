'use strict'

module.exports = diffAt;

function diffAt(arg1, arg2) {
  var index = 0;
  if (arg1 == null || arg2 == null) {
    return 0;
  }
  if (typeof arg1 === 'object' || typeof arg2 === 'object') {
    while (JSON.stringify(arg1[index]) === JSON.stringify(arg2[index])) {
      if (arg1[index++] === '') return -1;
    }
    return index;
  } else {
    if (typeof arg1 !== 'String') {
      arg1 = String(arg1)
    }
    if (typeof arg2 !== 'String') {
      arg2 = String(arg2)
    }
    while (arg1.charAt(index) === arg2.charAt(index)) {
      if (arg1.charAt(index++) === '') return -1;
    }
    return index;
  }
}
