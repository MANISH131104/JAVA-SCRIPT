const myArr = []
// %DebugPrint(myArr)

// continious , holey

// SMI (small integer)
// packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,10)
// hasOwnProperty(Object.prototype,10)

// Holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'   // HOLEY_ELEMENTS
arrFour[2] = '2'   // HOLEY_ELEMENTS
arrFour[3] = '3'   // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1')   // PACKED ELEMENTS
arrFive.push('2')   // PACKED ELEMENTS
arrFive.push('3')   // PACKED ELEMENTS


const arrSix = [1,2,3,4,5]
arrSix.push(Infinity)   


// for, for-of, forEach



