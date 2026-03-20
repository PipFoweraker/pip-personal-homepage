const fs = require('fs');
const path = require('path');

const reviewDir = __dirname;
const files = [];

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.tiff', '.tif', '.bmp', '.heic', '.heif']);
const TEXT_EXTS = new Set(['.txt', '.md', '.rst', '.org']);
const SKIP_FILES = new Set([
  'file-index.json', 'generate-index.js', 'serve.js',
  'index.html', '_manifest.md', 'categories.json'
]);

function getFileType(ext) {
  if (IMAGE_EXTS.has(ext)) return 'image';
  if (TEXT_EXTS.has(ext)) return 'text';
  return 'document'; // .doc, .docx, .odt, .rtf, .pdf, etc.
}

function walkDir(dir, baseDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, baseDir);
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.converted.md')) continue;
      if (SKIP_FILES.has(entry.name)) continue;

      const relPath = path.relative(baseDir, fullPath).split(path.sep).join('/');
      const ext = path.extname(entry.name).toLowerCase();
      const stats = fs.statSync(fullPath);
      const type = getFileType(ext);

      let content = null;
      let convertedFrom = null;

      if (type === 'text') {
        try {
          content = fs.readFileSync(fullPath, 'utf8').slice(0, 15000);
        } catch (e) {}
      } else if (type === 'document') {
        // Check for converted version
        const convPath = fullPath.replace(/\.[^.]+$/, '.converted.md');
        if (fs.existsSync(convPath)) {
          try {
            content = fs.readFileSync(convPath, 'utf8').slice(0, 15000);
            convertedFrom = ext;
          } catch (e) {}
        }
      }
      // Images: content stays null, served directly by the server

      files.push({
        path: relPath,
        name: entry.name,
        ext,
        type,
        size: stats.size,
        modified: stats.mtime.toISOString(),
        content,
        convertedFrom
      });
    }
  }
}

walkDir(reviewDir, reviewDir);
// Sort: prioritize loose files, then by path
files.sort((a, b) => {
  const aDepth = a.path.split('/').length;
  const bDepth = b.path.split('/').length;
  if (aDepth !== bDepth) return aDepth - bDepth;
  return a.path.localeCompare(b.path);
});

const counts = { text: 0, image: 0, document: 0 };
files.forEach(f => counts[f.type]++);

const output = {
  generated: new Date().toISOString(),
  count: files.length,
  counts,
  files
};

fs.writeFileSync(path.join(reviewDir, 'file-index.json'), JSON.stringify(output, null, 2));
console.log(`Generated index with ${files.length} files:`);
console.log(`  ${counts.text} text, ${counts.image} images, ${counts.document} documents`);
