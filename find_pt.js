import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

// Find all occurrences of "Protocolo Anticoceira" or "Cão Bem Nutrido" or "Pasta Dourada"
const ptIndex = data.indexOf('Cão Bem Nutrido');
console.log("Found Cão Bem Nutrido at:", ptIndex);

// Let's find Portuguese deliverables array in the bundle
const ptArrayIdx = data.indexOf('id:"cao-blindado",title:"Cão Blindado"');
if (ptArrayIdx === -1) {
  // Let's search for "Cão Blindado" in deliverables list
  const matches = [...data.matchAll(/title:"([^"]*Cão[^"]*)"/g)];
  console.log("Matches with Cão:", matches.map(m => m[0]));
}

// Find translations dictionary
const ptDictMatch = data.match(/pt:\{nav:\{([\s\S]*?)\}\}/);
if (ptDictMatch) {
  console.log("PT Nav:", ptDictMatch[0].slice(0, 500));
}
