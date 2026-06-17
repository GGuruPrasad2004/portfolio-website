const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.css')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Re-add quotes after color class if it was deleted
  content = content.replace(/text-([a-z]+)-([0-9]+)>/g, 'text-$1-$2\">');
  content = content.replace(/text-([a-z]+)-([0-9]+) }/g, 'text-$1-$2\" }');
  
  // Missing slashes
  content = content.replace(/500([0-9]{2})/g, '500/$1');
  
  // Re-add space before next class
  content = content.replace(/red-500([a-z])/g, 'red-500 $1');
  content = content.replace(/orange-500([a-z])/g, 'orange-500 $1');
  content = content.replace(/rose-500([a-z])/g, 'rose-500 $1');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
});
