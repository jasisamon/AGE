// Genera la carpeta www/ (HTML + CSS de Tailwind + fuentes Inter en local)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, 'fonts'), { recursive: true });

fs.copyFileSync(path.join(root, 'src/index.html'), path.join(www, 'index.html'));

for (const w of [400, 500, 600, 700, 800]) {
  const f = `inter-latin-${w}-normal.woff2`;
  fs.copyFileSync(path.join(root, 'node_modules/@fontsource/inter/files', f), path.join(www, 'fonts', f));
}

execSync('npx tailwindcss -i src/input.css -o www/app.css --minify', { cwd: root, stdio: 'inherit' });
console.log('www/ generado correctamente');
