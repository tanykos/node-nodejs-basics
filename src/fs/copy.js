import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stat } from 'fs/promises';
import { cp } from 'fs/promises';

export async function copy() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const src = `${__dirname}/files`;
  const dest = `${__dirname}/files_copy`;

  try {
    const check = await stat(src).catch(() => { throw new Error('FS operation failed'); });
    if (!check.isDirectory()) throw new Error('FS operation failed');

    const destExists = await stat(dest).then(() => true).catch(() => false);
    if (destExists) throw new Error('FS operation failed');

    await cp(src, dest, { recursive: true, force: false });
  } catch (err) {
    if (err.message === 'FS operation failed') throw err;
    throw new Error('FS operation failed');
  }
}


await copy();
