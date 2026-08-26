import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

console.log("=== SNIPPET 200000 - 220000 ===");
console.log(data.slice(200000, 220000));
