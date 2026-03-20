// Minimal static file server for the triage UI
// Usage: node serve.js
// Then open http://localhost:3456

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const DIR = __dirname;
const CATEGORIES_FILE = path.join(DIR, 'categories.json');

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.txt': 'text/plain',
  '.md': 'text/plain',
  // Images
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.tiff': 'image/tiff',
  '.tif': 'image/tiff',
  '.bmp': 'image/bmp',
  '.heic': 'image/heic',
  '.heif': 'image/heif',
  '.svg': 'image/svg+xml',
  // PDF (for inline viewing)
  '.pdf': 'application/pdf'
};

// Data format:
// {
//   "file/path": {
//     "category": "fragment",
//     "transcription": "...",
//     "log": [
//       { "action": "categorized", "value": "fragment", "at": "2026-03-20T..." },
//       { "action": "transcribed", "at": "2026-03-20T..." }
//     ]
//   }
// }
//
// Migrates from old format (string values) on load.

function loadData() {
  if (!fs.existsSync(CATEGORIES_FILE)) return {};
  try {
    const raw = JSON.parse(fs.readFileSync(CATEGORIES_FILE, 'utf8'));
    // Migrate old format: { "path": "category_string" } → new format
    for (const [key, val] of Object.entries(raw)) {
      if (typeof val === 'string') {
        raw[key] = {
          category: val,
          transcription: null,
          log: [{ action: 'categorized', value: val, at: new Date().toISOString(), note: 'migrated from v1 format' }]
        };
      }
    }
    return raw;
  } catch (e) {
    console.error('Error loading categories:', e.message);
    return {};
  }
}

function saveData(data) {
  fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
  // Handle POST to save categories/transcriptions
  if (req.method === 'POST' && req.url === '/save-categories') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        saveData(data);
        const count = Object.keys(data).length;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, saved: count }));
        console.log(`Saved ${count} entries`);
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // Handle GET for saved data
  if (req.method === 'GET' && req.url === '/categories.json') {
    const data = loadData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }

  // Static file serving
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(DIR, urlPath === '/' ? 'index.html' : urlPath);

  // Security: prevent directory traversal
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(DIR))) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(resolved, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const ext = path.extname(resolved).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';

    // Cache images for 1 hour (they don't change), no-cache for everything else
    const cacheControl = contentType.startsWith('image/') ? 'max-age=3600' : 'no-cache';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': cacheControl
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\nArchive Triage UI running at:\n`);
  console.log(`  http://localhost:${PORT}\n`);
  console.log(`Keyboard shortcuts:`);
  console.log(`  1-6, 0  = Assign category`);
  console.log(`  ← →    = Navigate`);
  console.log(`  Space   = Next uncategorized`);
  console.log(`  T       = Focus transcription pane\n`);
  console.log(`Data auto-saves to: categories.json`);
  console.log(`Press Ctrl+C to stop.\n`);
});
