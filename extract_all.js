import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

// Let's find Portuguese deliverable definitions
const ptMatch = data.match(/const\s+Yg\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/);
const enMatch = data.match(/const\s+Xg\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/);

console.log("PT match:", ptMatch ? ptMatch[1].slice(0, 500) : "not found");

// Find all keys in the translations
const matchPtDict = data.match(/pt\s*:\s*\{([\s\S]*?)\},\s*en\s*:/);
if (matchPtDict) {
  fs.writeFileSync('pt_dict.json', '{' + matchPtDict[1].slice(0, 10000) + '}');
  console.log("Extracted PT dict snippet");
}

// Find all deliverables list in the code
const delivRegex = /id:"([a-zA-Z0-9_-]+)",title:"([^"]+)"/g;
let m;
while ((m = delivRegex.exec(data)) !== null) {
  console.log("Deliverable item:", m[1], "-", m[2]);
}
