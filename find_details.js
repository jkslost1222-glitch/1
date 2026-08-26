import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

// Find occurrences of `id:"cao-blindado"`
let pos = 0;
while ((pos = data.indexOf('id:"cao-blindado"', pos)) !== -1) {
  console.log(`\n================ AT ${pos} ================`);
  console.log(data.slice(Math.max(0, pos - 50), pos + 1500));
  pos += 16;
}
