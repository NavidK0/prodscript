// Rasterizes public/og.svg → public/og.png (1200x630) for social cards.
// Run with: pnpm og
import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svg = readFileSync(join(root, 'public', 'og.svg'))

await sharp(svg, { density: 160 })
  .resize(1200, 630)
  .png()
  .toFile(join(root, 'public', 'og.png'))

console.log('✓ wrote public/og.png')
