import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// console.log(__filename);
// console.log(__dirname);


const filePath = path.join('/content', 'subfolder', 'test.txt');
const base = path.basename(filePath);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(filePath);
console.log(base);
console.log(absolute);