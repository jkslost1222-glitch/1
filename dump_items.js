import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

// Find deliverable array in PT
const ptDelivIdx = data.indexOf('id:"cao-blindado",title:"Cão Blindado"');
const ptDelivIdxAlt = data.indexOf('id:"cao-blindado"');

console.log("Searching for PT deliverables array...");
// Let's find all items in deliverables
const matches = [];
let idx = 0;
while ((idx = data.indexOf('{id:"', idx)) !== -1) {
  const end = data.indexOf('}}', idx);
  if (end !== -1 && end - idx < 2000) {
    const snippet = data.slice(idx, end + 2);
    if (snippet.includes('title:')) {
      matches.push(snippet);
    }
  }
  idx += 6;
}

console.log(`Found ${matches.length} deliverable items:`);
matches.forEach((m, i) => {
  const idM = m.match(/id:"([^"]+)"/);
  const titleM = m.match(/title:"([^"]+)"/);
  console.log(`${i+1}. ID: ${idM ? idM[1] : '?'} | Title: ${titleM ? titleM[1] : '?'}`);
});
