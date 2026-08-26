import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

// Find all deliverables in PT
const idx = data.indexOf('pet-em-dia');
if (idx !== -1) {
  console.log("=== PET-EM-DIA & OTHERS ===");
  console.log(data.slice(idx - 100, idx + 3500));
}
