const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

(async () => {
  const file = await readFile('tiivistelma.tex');
  const text = file.toString().slice(file.indexOf('Suosittelu'), 
file.lastIndexOf('{document}') - 4);
  const words = text.split(' ').filter(word => word || !word.includes('cite{'));
  console.table(words.length);
})();
