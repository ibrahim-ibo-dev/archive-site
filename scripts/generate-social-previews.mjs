// Import genuine browser captures of the public pages. No composition or UI redraw.
// Usage: node scripts/generate-social-previews.mjs <absolute-capture-directory>
// Expected: archive-social-home.png and archive-social-<route-slug>.png, 1200×630.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
if(!process.argv[2])throw Error('Supply the directory containing real 1200×630 browser captures.');
const captures=path.resolve(process.argv[2]);
const out=path.join(root,'public/images/social');
await fs.mkdir(out,{recursive:true});
const dirs=await fs.readdir(path.join(root,'src/app'),{withFileTypes:true});
const slugs=[];
for(const dir of dirs){
  if(!dir.isDirectory())continue;
  try{
    await fs.access(path.join(root,'src/app',dir.name,'page.tsx'));
    await fs.access(path.join(root,'src/app',dir.name,'layout.tsx'));
    slugs.push(dir.name);
  }catch{}
}

// Validate the whole set before touching any exported preview.
const records=[],seen=new Set();
for(const slug of ['home',...slugs]){
  const filename=`archive-social-${slug}.png`;
  const input=await fs.readFile(path.join(captures,filename));
  const info=await sharp(input).metadata();
  // Browser viewport capture can differ by a few pixels due to display scaling.
  if(Math.abs(info.width-1200)>8||Math.abs(info.height-630)>8||Math.abs(info.width/info.height-1200/630)>.04)throw Error(`${filename} must be a genuine 1200×630 page capture; received ${info.width}×${info.height}.`);
  const sourceSha256=createHash('sha256').update(input).digest('hex');
  if(seen.has(sourceSha256))throw Error(`${filename} duplicates another page capture.`);
  seen.add(sourceSha256);
  records.push({slug,filename,input,sourceSha256,capturedWidth:info.width,capturedHeight:info.height});
}
const manifest={};
for(const {slug,filename,input,sourceSha256,capturedWidth,capturedHeight} of records){
  const image=`/images/social/${slug==='home'?'archive':slug}-2026-10.jpg`;
  // Only normalize tiny display-scaling rounding: no crop, labels or replacement art.
  await sharp(input).resize(1200,630,{fit:'fill'}).jpeg({quality:94,mozjpeg:true,chromaSubsampling:'4:4:4'}).toFile(path.join(root,'public',image));
  manifest[slug]={image,sourceCapture:filename,sourceSha256,capturedWidth,capturedHeight,width:1200,height:630};
}
await fs.writeFile(path.join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Imported ${records.length} real archive page captures.`);
