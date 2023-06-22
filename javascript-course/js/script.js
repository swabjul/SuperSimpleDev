



let range = 5;
let start = 1;

// // 0 to range
// const r = Math.floor(Math.random() * range);

// // // inbetween
const r = Math.floor(Math.random() * (range - start) + start);

// start and range included
// const r = Math.floor(Math.random() * (range - start + 1) + start);

console.log(r);