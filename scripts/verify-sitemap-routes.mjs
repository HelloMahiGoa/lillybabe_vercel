/**
 * Ensures `src/lib/sitemap-routes.json` matches `src/app` *-escorts dirs and
 * `src/app/blog` post folders. Run after adding routes: `npm run verify:sitemap`.
 */
import { readFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function sortCopy(a) {
  return [...a].sort();
}

function diff(a, b, label) {
  const setA = new Set(a);
  const setB = new Set(b);
  const onlyA = [...setA].filter((x) => !setB.has(x));
  const onlyB = [...setB].filter((x) => !setA.has(x));
  if (onlyA.length || onlyB.length) {
    console.error(`\n${label} mismatch:`);
    if (onlyA.length) console.error(`  Only in JSON (not on disk): ${onlyA.join(', ')}`);
    if (onlyB.length) console.error(`  Only on disk (missing from JSON): ${onlyB.join(', ')}`);
    return false;
  }
  return true;
}

const jsonPath = join(root, 'src', 'lib', 'sitemap-routes.json');
const routes = JSON.parse(readFileSync(jsonPath, 'utf8'));

const appDir = join(root, 'src', 'app');
const appEntries = readdirSync(appDir, { withFileTypes: true });
const escortsOnDisk = sortCopy(
  appEntries.filter((e) => e.isDirectory() && e.name.endsWith('-escorts')).map((e) => e.name),
);

const blogDir = join(appDir, 'blog');
const blogEntries = readdirSync(blogDir, { withFileTypes: true });
const blogOnDisk = sortCopy(blogEntries.filter((e) => e.isDirectory()).map((e) => e.name));

const jsonLocations = sortCopy(routes.locationEscorts || []);
const jsonBlog = sortCopy(routes.blogPosts || []);

let ok = true;
ok = diff(jsonLocations, escortsOnDisk, 'locationEscorts (*-escorts)') && ok;
ok = diff(jsonBlog, blogOnDisk, 'blogPosts') && ok;

if (!ok) {
  console.error('\nUpdate src/lib/sitemap-routes.json to match the filesystem, then re-run.\n');
  process.exit(1);
}

console.log('sitemap-routes.json matches src/app *-escorts and src/app/blog folders.');
