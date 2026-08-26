import fs from 'fs';

const data = fs.readFileSync('extracted_bundle.js', 'utf8');

// Find the 5 recipes details
const recipeIdx = data.indexOf('Receita 1:');
if (recipeIdx !== -1) {
  console.log("=== RECIPES CONTENT ===");
  console.log(data.slice(recipeIdx - 100, recipeIdx + 3000));
}

// Find the antiotite / ear care content
const otiteIdx = data.indexOf('antiotite');
if (otiteIdx !== -1) {
  console.log("\n=== ANTIO TITE CONTENT ===");
  console.log(data.slice(otiteIdx - 50, otiteIdx + 1500));
}
