const fs = require('fs');
const path = require('path');

const regions = [
  { slug: 'kanto', name: 'Kanto', gen: 1, games: 'RED / BLUE / YELLOW', range: '#1-151', count: 151, legendaryGroup: 'Legendary Birds', starters: 'Bulbasaur, Charmander, Squirtle' },
  { slug: 'johto', name: 'Johto', gen: 2, games: 'GOLD / SILVER / CRYSTAL', range: '#152-251', count: 100, legendaryGroup: 'Legendary Beasts', starters: 'Chikorita, Cyndaquil, Totodile' },
  { slug: 'sinnoh', name: 'Sinnoh', gen: 4, games: 'DIAMOND / PEARL / PLATINUM', range: '#387-493', count: 107, legendaryGroup: 'Creation Trio', starters: 'Turtwig, Chimchar, Piplup' },
  { slug: 'unova', name: 'Unova', gen: 5, games: 'BLACK / WHITE', range: '#494-649', count: 156, legendaryGroup: 'Tao Trio', starters: 'Snivy, Tepig, Oshawott' },
  { slug: 'kalos', name: 'Kalos', gen: 6, games: 'X / Y', range: '#650-721', count: 72, legendaryGroup: 'Aura Trio', starters: 'Chespin, Fennekin, Froakie' },
  { slug: 'alola', name: 'Alola', gen: 7, games: 'SUN / MOON', range: '#722-809', count: 88, legendaryGroup: 'Light Trio', starters: 'Rowlet, Litten, Popplio' },
  { slug: 'galar', name: 'Galar', gen: 8, games: 'SWORD / SHIELD', range: '#810-898', count: 89, legendaryGroup: 'Hero Duo', starters: 'Grookey, Scorbunny, Sobble' },
  { slug: 'paldea', name: 'Paldea', gen: 9, games: 'SCARLET / VIOLET', range: '#906-1025', count: 120, legendaryGroup: 'Treasures of Ruin', starters: 'Sprigatito, Fuecoco, Quaxly' },
];

const appDir = path.join(__dirname, '..', 'src', 'app');

regions.forEach(r => {
  const filePath = path.join(appDir, `${r.slug}-pokemon-generator`, 'page.tsx');
  if (!fs.existsSync(filePath)) { console.log(`SKIP: ${r.slug}`); return; }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Fix imports - ensure only MapPin, ArrowLeft
  content = content.replace(
    /import \{[^}]+\} from "lucide-react";/,
    'import { MapPin, ArrowLeft } from "lucide-react";'
  );

  // 2. Fix main wrapper
  content = content.replace(
    /className="min-h-screen bg-cream px-4 py-8 sm:px-6 lg:px-8"/g,
    'className="min-h-screen bg-cream p-4 md:p-8 relative"'
  );

  // 3. Fix breadcrumb styling
  content = content.replace(/className="flex items-center gap-2 text-sm"/g, 'className="flex items-center gap-2 font-mono text-xs md:text-sm"');
  content = content.replace(/className="text-brown hover:text-red transition-colors flex items-center gap-1"/g, 'className="text-charcoal hover:text-black transition-colors flex items-center gap-1"');
  content = content.replace(/<ArrowLeft className="w-4 h-4" \/>/g, '<ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />');
  content = content.replace(/Home\s*\n/g, 'HOME\n');
  content = content.replace(/className="text-brown\/50"/g, 'className="text-black/30"');
  content = content.replace(/className="text-brown font-semibold">/g, 'className="text-black font-bold uppercase">');

  // 4. Fix hero section - badge
  content = content.replace(
    /className="inline-flex items-center gap-2 bg-[^"]*text-[^"]*border-2 border-black px-4 py-2 mb-4"/g,
    'className="inline-flex items-center gap-2 bg-marigold text-black border-2 md:border-4 border-black slasher px-4 py-1.5 md:py-2 mb-4"'
  );
  content = content.replace(
    /<span className="font-bold">/g,
    '<span className="font-mono text-[10px] md:text-sm font-bold uppercase tracking-widest leading-none mt-0.5">'
  );

  // 5. Fix h1
  content = content.replace(
    /className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk"/g,
    'className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-7xl text-black mb-3 md:mb-4 uppercase tracking-tight px-2"'
  );

  // 6. Fix hero description
  content = content.replace(
    /className="text-lg sm:text-xl text-brown\/80 max-w-3xl mx-auto mb-6"/g,
    'className="font-mono text-sm md:text-base text-charcoal max-w-2xl mx-auto leading-relaxed"'
  );

  // 7. Fix hero wrapper
  content = content.replace(
    /className="max-w-7xl mx-auto mb-12 text-center"/g,
    'className="max-w-7xl mx-auto mb-6 md:mb-8 text-center"'
  );

  // 8. Remove Key Features cards (everything between mb-6/mb-8 and Generator Component)
  content = content.replace(
    /\n\s*{\/\* Key Features \*\/}[\s\S]*?<\/div>\s*\n\s*<\/div>\s*\n\s*\n\s*{\/\* Generator Component \*\/}/,
    '\n        </div>\n\n        {/* Generator Component */}'
  );

  // 9. Fix SEO content wrapper
  content = content.replace(
    /className="max-w-4xl mx-auto mt-16 space-y-8"/g,
    'className="max-w-7xl mx-auto mt-12 md:mt-16"'
  );

  // 10. Fix article sections to brutalist
  content = content.replace(
    /className="bg-white border-2 border-black p-8 space-y-6"/g,
    'className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher"'
  );

  // 11. Fix h2 headings
  content = content.replace(
    /className="text-3xl font-bold text-brown border-b-2 border-black pb-3"/g,
    'className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase"'
  );
  content = content.replace(
    /className="text-2xl font-bold text-brown mb-6 flex items-center gap-2"/g,
    'className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase"'
  );

  // 12. Fix body text
  content = content.replace(/text-brown\/80/g, 'text-charcoal');
  content = content.replace(/text-brown\/70/g, 'text-charcoal');
  content = content.replace(/text-brown\/50/g, 'text-black/30');
  content = content.replace(/"text-brown"/g, '"text-black"');
  content = content.replace(/text-brown /g, 'text-black ');
  content = content.replace(/font-bold text-brown/g, 'font-mono font-bold text-sm text-black uppercase');

  // 13. Fix details/FAQ
  content = content.replace(/className="border-2 border-black p-4 bg-cream"/g, 'className="border-2 border-black p-4 bg-white slasher"');
  content = content.replace(/className="font-bold text-black cursor-pointer"/g, 'className="font-mono font-bold text-sm text-black cursor-pointer uppercase"');
  content = content.replace(/className="mt-2 text-charcoal text-sm"/g, 'className="mt-3 font-mono text-xs text-charcoal leading-relaxed"');

  // 14. Fix inner cards
  content = content.replace(/className="border-2 border-black p-4 bg-cream"/g, 'className="bg-white border-2 border-black p-4 slasher"');

  // 15. Fix colored sections to neutral
  content = content.replace(/bg-yellow border-2 border-black p-8/g, 'mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher');
  content = content.replace(/bg-yellow\/20/g, 'bg-white');
  content = content.replace(/bg-blue\/10/g, 'bg-white');
  content = content.replace(/bg-red\/10/g, 'bg-white');
  content = content.replace(/bg-green\/10/g, 'bg-white');
  content = content.replace(/bg-purple-600\/10/g, 'bg-white');
  content = content.replace(/bg-gray-700\/10/g, 'bg-white');
  content = content.replace(/bg-pink-500\/10/g, 'bg-white');

  // 16. Fix colored borders on cards
  content = content.replace(/border-2 border-blue bg-blue\/10/g, 'bg-white border-2 border-black slasher');
  content = content.replace(/border-2 border-purple-600 bg-purple-600\/10/g, 'bg-white border-2 border-black slasher');
  content = content.replace(/border-2 border-red bg-red\/10/g, 'bg-white border-2 border-black slasher');
  content = content.replace(/border-2 border-pink-500 bg-pink-500\/10/g, 'bg-white border-2 border-black slasher');
  content = content.replace(/border-2 border-gray-700 bg-gray-700\/10/g, 'bg-white border-2 border-black slasher');

  // 17. Fix colored hover links
  content = content.replace(/hover:bg-blue hover:text-white/g, 'hover:bg-black hover:text-white');
  content = content.replace(/hover:bg-red hover:text-white/g, 'hover:bg-black hover:text-white');
  content = content.replace(/hover:bg-green-700 hover:text-white/g, 'hover:bg-black hover:text-white');
  content = content.replace(/hover:bg-purple-700 hover:text-white/g, 'hover:bg-black hover:text-white');
  content = content.replace(/hover:bg-purple-600 hover:text-white/g, 'hover:bg-black hover:text-white');

  // 18. Fix heading colors
  content = content.replace(/font-bold text-blue/g, 'font-mono font-bold text-sm text-black uppercase');
  content = content.replace(/font-bold text-purple-600/g, 'font-mono font-bold text-sm text-black uppercase');

  // 19. Fix colored tier borders
  content = content.replace(/border-l-4 border-red pl-4/g, 'bg-white border-2 border-black p-4 slasher border-l-4 border-l-red-500');
  content = content.replace(/border-l-4 border-yellow pl-4/g, 'bg-white border-2 border-black p-4 slasher border-l-4 border-l-yellow-400');
  content = content.replace(/border-l-4 border-green pl-4/g, 'bg-white border-2 border-black p-4 slasher border-l-4 border-l-green-500');

  // 20. Fix text-white/90 in links
  content = content.replace(/text-charcoal group-hover:text-white\/90/g, 'text-charcoal group-hover:text-white/70');

  // 21. Add section labels before h2s that don't have them
  // (this is harder to do programmatically, skip for now)

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Transformed: ${r.slug}`);
});

console.log('Done!');
