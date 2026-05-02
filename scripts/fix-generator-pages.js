const fs = require('fs');
const path = require('path');

const pagesDir = 'd:\\random pokk\\src\\app';

const generatorPages = [
  'hoenn-pokemon-generator',
  'kanto-pokemon-generator',
  'johto-pokemon-generator',
  'sinnoh-pokemon-generator',
  'unova-pokemon-generator',
  'kalos-pokemon-generator',
  'alola-pokemon-generator',
  'galar-pokemon-generator',
  'paldea-pokemon-generator',
  'shiny-pokemon-generator',
  'legendary-pokemon-generator',
  'starter-pokemon-generator',
  'nuzlocke-generator',
  'draft-league-generator',
];

let totalFixed = 0;

for (const page of generatorPages) {
  const filePath = path.join(pagesDir, page, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${page}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Remove FreshnessSignal import line
  if (content.includes('FreshnessSignal')) {
    content = content.replace(/^import FreshnessSignal from "@\/components\/FreshnessSignal";\r?\n/m, '');
    // Remove FreshnessSignal usage (whole line, handles different prop combos)
    content = content.replace(/[ \t]*<FreshnessSignal[^/]*\/>\r?\n/g, '');
    changed = true;
    console.log(`  ✓ Removed FreshnessSignal: ${page}`);
  }

  // 2. Remove MapPin from lucide imports
  if (content.includes('MapPin,')) {
    content = content.replace(/MapPin,\s*/g, '');
    changed = true;
    console.log(`  ✓ Removed MapPin import: ${page}`);
  } else if (content.includes(', MapPin')) {
    content = content.replace(/,\s*MapPin/g, '');
    changed = true;
    console.log(`  ✓ Removed MapPin import (trailing): ${page}`);
  }

  // 3. Remove ExternalLink from imports (if unused after page rewrite)
  // Only remove if it only appears in the import line
  const externalLinkUsages = (content.match(/ExternalLink/g) || []).length;
  if (externalLinkUsages === 1) {
    content = content.replace(/,?\s*ExternalLink\s*,?/g, (m) => {
      // only remove from import context
      return m.includes('ExternalLink') ? '' : m;
    });
    changed = true;
  }

  // 4. Remove the hero badge block (the inline-flex with MapPin icon + gen text)
  // Pattern: starts with whitespace + <div className="inline-flex items-center gap-2 bg-marigold
  // and ends with closing </div> + newline
  const badgePattern = /[ \t]*<div className="inline-flex items-center gap-2 bg-marigold[^>]*>[\s\S]*?<\/div>\r?\n/;
  if (badgePattern.test(content)) {
    content = content.replace(badgePattern, '');
    changed = true;
    console.log(`  ✓ Removed hero badge: ${page}`);
  }

  // 5. Change section highlight cards from bg-marigold to bg-white (section cards, not the "MORE TOOLS" panel label)
  // Target: className="bg-marigold border-2 border-black p-4 slasher"
  content = content.replace(/"bg-marigold border-2 border-black p-4 slasher"/g, '"bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold"');

  // Also fix the 2-border variant
  content = content.replace(/"bg-marigold border-2 border-black p-6 slasher"/g, '"bg-white border-2 border-black p-6 slasher border-l-4 border-l-marigold"');

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed++;
    console.log(`✅ Fixed: ${page}`);
  } else {
    console.log(`⚠️  No changes needed: ${page}`);
  }
}

console.log(`\n✅ Done. ${totalFixed} pages updated.`);
