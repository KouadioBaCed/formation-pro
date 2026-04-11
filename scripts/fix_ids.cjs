const fs = require('fs');
const path = 'src/data/final_exam_pmp_one.ts';

try {
  const content = fs.readFileSync(path, 'utf8');
  fs.writeFileSync(path + '.bak', content);

  let count = 1;
  // Replace any occurrence of an object starting with optionally an id then question
  const newContent = content.replace(/\{\s*\n\s*(?:id:\s*\d+,\s*\n\s*)?question:/g, function (match) {
    return '{\n    id: ' + (count++) + ',\n    question:';
  });

  fs.writeFileSync(path, newContent, 'utf8');
  console.log('IDs updated. Total questions processed:', count - 1);
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
