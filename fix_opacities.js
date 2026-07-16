const fs = require('fs');
const path = require('path');

const sectionsDir = path.join('d:/Projects/hutkjdu26/app/components/sections');
const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix the accidentally truncated opacities that started with 0.
  // We look for '\"' or ')' or '}' followed by '.\d+' and a comma or closing brace
  content = content.replace(/(\"|\)|\})\.(\d+)(,| \})/g, '\$1, opacity: 0.\$2\$3');

  fs.writeFileSync(filePath, content);
  console.log('Fixed opacities in', file);
}
