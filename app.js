let x1 = 699
let y1 = 595

let x2 = 752
let y2 = 462

let x3 = 448
let y3 = 700

const xValue = 1000
const yValue = 880

let set1 = `${((x1/xValue)*100).toFixed(1)}% ${((y1/yValue)*100).toFixed(1)}%, `
let set2 = `${((x2/xValue)*100).toFixed(1)}% ${((y2/yValue)*100).toFixed(1)}%, `
let set3 = `${((x3/xValue)*100).toFixed(1)}% ${((y3/yValue)*100).toFixed(1)}%`

const setFinal = set1 + set2 + set3
console.log(set1)

console.log (`${set1} 
${set2}`)

console.log (`${set1} 
${set2}
${set3}`)