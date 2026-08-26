import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

// Let's find sections, objects, deliverables
console.log("=== SEARCHING FOR DELIVERABLES ===");
const idx = data.indexOf('id:"antiotite"');
if (idx !== -1) {
  console.log(data.slice(Math.max(0, idx - 200), idx + 2500));
}

console.log("\n=== SEARCHING FOR CHAPTERS / EBOOK ===");
const ebookIdx = data.indexOf('Rh=');
if (ebookIdx !== -1) {
  console.log(data.slice(ebookIdx, ebookIdx + 3000));
}

console.log("\n=== SEARCHING FOR UPSELL / MODALS ===");
const upsellIdx = data.indexOf('antiCoceira:');
if (upsellIdx !== -1) {
  console.log(data.slice(upsellIdx, upsellIdx + 1500));
}
