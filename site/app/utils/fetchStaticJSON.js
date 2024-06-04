import { promises as fs } from 'fs';

export default async function fetchStaticJSON (url) {
    const res = await fs.readFile(process.cwd() + url, 'utf8');
    return await JSON.parse(res);
}