// Example context assuming `node` is an object with properties
let node = { vx: 0 };
let x = 10, l = 2, rj = 5, ri2 = 25;

node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));

console.log(node.vx); // Output: 125
