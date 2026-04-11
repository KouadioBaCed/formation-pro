const fs = require('fs');
const s = fs.readFileSync('src/data/final_exam_pmp_one.ts', 'utf8');
function checkPair(charOpen, charClose) {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === charOpen) depth++;
    if (ch === charClose) depth--;
    if (depth < 0) return { ok: false, pos: i, depth };
  }
  return { ok: depth === 0, depth };
}
console.log('Brace {} check:', checkPair('{','}'));
console.log('Bracket [] check:', checkPair('[',']'));
console.log('Parentheses () check:', checkPair('(',')'));
