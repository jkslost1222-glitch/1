import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

console.log("=== SNIPPET 220000 - 245000 ===");
console.log(data.slice(220000, 230000));
