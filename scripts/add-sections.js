const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');

const regions = {
  kanto: { name: 'Kanto', gen: 1, games: 'Red, Blue & Yellow' },
  johto: { name: 'Johto', gen: 2, games: 'Gold, Silver & Crystal' },
  sinnoh: { name: 'Sinnoh', gen: 4, games: 'Diamond, Pearl & Platinum' },
  unova: { name: 'Unova', gen: 5, games: 'Black & White' },
  kalos: { name: 'Kalos', gen: 6, games: 'X & Y' },
  alola: { name: 'Alola', gen: 7, games: 'Sun & Moon' },
  galar: { name: 'Galar', gen: 8, games: 'Sword & Shield' },
  paldea: { name: 'Paldea', gen: 9, games: 'Scarlet & Violet' },
};

// Generic sections to inject (same for all pages, just region name changes)
function getHowToUse(name) {
  return `
          {/* How to Use */}
          <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">USER GUIDE</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
              HOW TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">USE IT</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <div className="bg-white border-2 border-black p-4 slasher text-center">
                <div className="font-grotesk font-bold text-4xl text-black mb-2">01</div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Choose Team Size</h3>
                <p className="font-mono text-xs text-charcoal">Pick 1-12 Pokemon for your team</p>
              </div>
              <div className="bg-white border-2 border-black p-4 slasher text-center">
                <div className="font-grotesk font-bold text-4xl text-black mb-2">02</div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Set Filters</h3>
                <p className="font-mono text-xs text-charcoal">Filter by type, rarity, or evolution</p>
              </div>
              <div className="bg-white border-2 border-black p-4 slasher text-center">
                <div className="font-grotesk font-bold text-4xl text-black mb-2">03</div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Generate</h3>
                <p className="font-mono text-xs text-charcoal">Hit generate for random ${name} teams</p>
              </div>
              <div className="bg-white border-2 border-black p-4 slasher text-center">
                <div className="font-grotesk font-bold text-4xl text-black mb-2">04</div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Share</h3>
                <p className="font-mono text-xs text-charcoal">Share your team with friends</p>
              </div>
            </div>
          </section>

          {/* Card Generator CTA */}
          <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher bg-black text-white">
            <div className="inline-block bg-marigold text-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">TRADING CARDS</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[0.9] mb-4 uppercase">
              CREATE ${name.toUpperCase()} <span className="text-marigold">POKEMON CARDS</span>
            </h2>
            <p className="font-mono text-xs md:text-sm text-white/70 max-w-2xl mb-6 leading-relaxed">
              Turn your favorite ${name} Pokemon into custom trading cards! Generate cards with official artwork, stats, types, and abilities. Perfect for collectors and fans.
            </p>
            <Link href="/pokemon-card-generator" className="inline-block bg-marigold text-black border-2 border-marigold px-6 py-3 font-mono font-bold text-sm uppercase tracking-wider slasher hover:bg-white hover:text-black transition-all">
              Open Card Generator →
            </Link>
          </section>

          {/* Main Generator CTA */}
          <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">ALL REGIONS</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-4 uppercase">
              RANDOM POKEMON <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">GENERATOR</span>
            </h2>
            <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mb-6 leading-relaxed">
              Not just ${name} — generate teams from <strong>all 1,025 Pokemon</strong> across 9 generations. Filter by any region, type, rarity, evolution stage, and more. The ultimate team builder for Nuzlocke, Draft League, and competitive play.
            </p>
            <Link href="/" className="inline-block bg-black text-white border-2 border-black px-6 py-3 font-mono font-bold text-sm uppercase tracking-wider slasher hover:bg-marigold hover:text-black transition-all">
              Open Full Generator →
            </Link>
          </section>`;
}

// Section label badges to add before h2s
const labelMap = [
  { match: /About the \w+ Region/i, label: 'REGION OVERVIEW' },
  { match: /Legendary|Mythical/i, label: 'LEGENDARIES' },
  { match: /Popular|Starters? &|New Pokemon|Complete.*List|Paradox/i, label: 'FAN FAVORITES' },
  { match: /Best.*Competitive|Tier List/i, label: 'COMPETITIVE' },
  { match: /Trivia|Fun Facts/i, label: 'DID YOU KNOW?' },
  { match: /How to Use/i, label: 'USER GUIDE' },
  { match: /Other.*Generator|Related/i, label: 'EXPLORE' },
  { match: /FAQ/i, label: 'FAQ' },
  { match: /Shiny Hunting/i, label: 'TIPS & TRICKS' },
  { match: /What is a Shiny/i, label: 'OVERVIEW' },
  { match: /Shiny.*Searches/i, label: 'FAN FAVORITES' },
];

Object.entries(regions).forEach(([slug, r]) => {
  const filePath = path.join(appDir, `${slug}-pokemon-generator`, 'page.tsx');
  if (!fs.existsSync(filePath)) return;

  let lines = fs.readFileSync(filePath, 'utf8').split('\n');
  let newLines = [];
  let addedSections = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Add label badges before h2 headings (only inside section/article, not in JSON-LD)
    if (trimmed.startsWith('<h2 className="font-grotesk')) {
      // Get the h2 text from next line or same line
      const h2Text = lines[i + 1] ? lines[i + 1].trim() : trimmed;
      const combined = trimmed + ' ' + h2Text;

      // Check if there's already a label badge above (check previous non-empty line)
      let prevIdx = i - 1;
      while (prevIdx >= 0 && newLines[newLines.length - 1 - (i - 1 - prevIdx)]?.trim() === '') prevIdx--;
      const prevLine = newLines[newLines.length - 1]?.trim() || '';
      const hasBadge = prevLine.includes('tracking-widest') || prevLine.includes('</span>') || prevLine.includes('</div>');

      if (!hasBadge) {
        // Find matching label
        let label = 'OVERVIEW';
        for (const lm of labelMap) {
          if (lm.match.test(combined)) { label = lm.label; break; }
        }
        const indent = line.match(/^\s*/)[0];
        newLines.push(`${indent}<div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">`);
        newLines.push(`${indent}  <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">${label}</span>`);
        newLines.push(`${indent}</div>`);
      }
    }

    // Inject How to Use + CTA sections before "Other Region" or "Related" section
    if (!addedSections && (trimmed.includes('Other Region Generators') || trimmed.includes('Related Pokemon Generators') || trimmed.includes('Related Tools'))) {
      // Go back to find the section/div opening
      let insertIdx = newLines.length - 1;
      while (insertIdx > 0 && !newLines[insertIdx].includes('{/*') && !newLines[insertIdx].includes('<div') && !newLines[insertIdx].includes('<section')) {
        insertIdx--;
      }
      // Insert before the comment or section start
      const howTo = getHowToUse(r.name).split('\n');
      newLines.splice(insertIdx, 0, ...howTo);
      addedSections = true;
    }

    newLines.push(line);
  }

  // If we never found "Other Region" section, add before FAQ
  if (!addedSections) {
    const finalLines = [];
    for (let i = 0; i < newLines.length; i++) {
      if (!addedSections && newLines[i].includes('FAQ Section')) {
        const howTo = getHowToUse(r.name).split('\n');
        finalLines.push(...howTo);
        addedSections = true;
      }
      finalLines.push(newLines[i]);
    }
    if (addedSections) newLines = finalLines;
  }

  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  console.log(`Enhanced: ${slug}`);
});

console.log('Done!');
