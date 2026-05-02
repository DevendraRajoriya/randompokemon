const fs = require('fs');
const path = require('path');
const appDir = path.join(__dirname, '..', 'src', 'app');

const pages = {
  shiny: { name: 'Shiny', ctaName: 'SHINY' },
  legendary: { name: 'Legendary', ctaName: 'LEGENDARY' },
  starter: { name: 'Starter', ctaName: 'STARTER' },
};

const labelMap = [
  { match: /What is a Shiny/i, label: 'OVERVIEW' },
  { match: /How to Use/i, label: 'USER GUIDE' },
  { match: /Popular Shiny|Searches/i, label: 'FAN FAVORITES' },
  { match: /Shiny Hunting/i, label: 'TIPS & TRICKS' },
  { match: /About Legendary/i, label: 'OVERVIEW' },
  { match: /Complete Legendary/i, label: 'LEGENDARIES' },
  { match: /Strongest|Best.*Competitive|Tier/i, label: 'COMPETITIVE' },
  { match: /Trivia|Fun Facts|Did You Know/i, label: 'DID YOU KNOW?' },
  { match: /Starter.*Every|All.*Starter|Complete.*Starter/i, label: 'ALL STARTERS' },
  { match: /Best Starter|Which Starter/i, label: 'COMPETITIVE' },
  { match: /Starter.*Trivia|Facts/i, label: 'DID YOU KNOW?' },
  { match: /Related|Other/i, label: 'EXPLORE' },
  { match: /FAQ/i, label: 'FAQ' },
];

function getGenericSections(name, ctaName) {
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
                <p className="font-mono text-xs text-charcoal">Hit generate for random ${name} Pokemon</p>
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
              CREATE ${ctaName} <span className="text-marigold">POKEMON CARDS</span>
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
              Generate teams from <strong>all 1,025 Pokemon</strong> across 9 generations. Filter by any region, type, rarity, evolution stage, and more. The ultimate team builder for Nuzlocke, Draft League, and competitive play.
            </p>
            <Link href="/" className="inline-block bg-black text-white border-2 border-black px-6 py-3 font-mono font-bold text-sm uppercase tracking-wider slasher hover:bg-marigold hover:text-black transition-all">
              Open Full Generator →
            </Link>
          </section>`;
}

Object.entries(pages).forEach(([slug, info]) => {
  const filePath = path.join(appDir, `${slug}-pokemon-generator`, 'page.tsx');
  if (!fs.existsSync(filePath)) return;

  let lines = fs.readFileSync(filePath, 'utf8').split('\n');
  let newLines = [];
  let addedSections = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Convert article to section
    if (trimmed.startsWith('<article className="mb-8')) {
      newLines.push(line.replace('<article', '<section'));
      continue;
    }
    if (trimmed === '</article>') {
      newLines.push(line.replace('</article>', '</section>'));
      continue;
    }

    // Add label badges before h2s that don't already have one
    if (trimmed.startsWith('<h2 className="font-grotesk')) {
      const h2Text = lines[i + 1] ? lines[i + 1].trim() : trimmed;
      const combined = trimmed + ' ' + h2Text;
      const prevLine = newLines.length > 0 ? newLines[newLines.length - 1].trim() : '';
      const hasBadge = prevLine.includes('tracking-widest') || prevLine.includes('</span>') || prevLine.includes('</div>');

      if (!hasBadge) {
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

    // Inject generic sections before "Related" or "Related Tools" div
    if (!addedSections && (trimmed.includes('Related Pokemon Generators') || trimmed.includes('Related Tools'))) {
      // Find the opening tag of this section (go back to find the div/section comment)
      let insertIdx = newLines.length - 1;
      while (insertIdx > 0) {
        const l = newLines[insertIdx].trim();
        if (l.startsWith('{/*') || l.startsWith('<div className="mb-8') || l.startsWith('<section className="mb-8')) break;
        insertIdx--;
      }

      const sections = getGenericSections(info.name, info.ctaName).split('\n');
      newLines.splice(insertIdx, 0, ...sections);
      addedSections = true;
    }

    newLines.push(line);
  }

  // If no "Related" section found, add before FAQ
  if (!addedSections) {
    const finalLines = [];
    for (let i = 0; i < newLines.length; i++) {
      if (!addedSections && newLines[i].includes('FAQ Section')) {
        const sections = getGenericSections(info.name, info.ctaName).split('\n');
        finalLines.push(...sections);
        addedSections = true;
      }
      finalLines.push(newLines[i]);
    }
    if (addedSections) newLines = finalLines;
  }

  // Fix the Related section: convert div to section and add label
  let content = newLines.join('\n');
  // Fix colored bg on Related section
  content = content.replace(/bg-yellow border-2 border-black p-8/g, 'mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher');

  // Convert Related wrapper from div to section
  content = content.replace(
    /(<\s*div\s+className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher"\s*>)\s*\n(\s*<h2)/g,
    '<section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">\n            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">\n              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">EXPLORE</span>\n            </div>\n$2'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Enhanced: ${slug}`);
});

console.log('Done!');
