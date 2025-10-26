import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = `${__dirname}/files/fresh.txt`;
  const content = 'I am fresh and young';

    try {
        await writeFile(filePath, content, { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await create();
