const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const imageNames = [
  'pos-1.png',
  'pos-2.png',
  'front-office.png',
  'housekeeping.png',
  'food-beverage.png',
  'purchasing.png',
  'accounting.png',
  'hrd.png',
  'self-order.png',
  'employee-portal.png'
];

// A tiny valid 1x1 transparent PNG base64
const dummyPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const dummyBuffer = Buffer.from(dummyPngBase64, 'base64');

imageNames.forEach(name => {
  const srcPath = path.join(imagesDir, name);
  const darkName = name.replace('.png', '-dark.png');
  const destPath = path.join(imagesDir, darkName);

  if (fs.existsSync(srcPath)) {
    // Copy existing light image to dark image as a placeholder
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${name} to ${darkName}`);
  } else {
    // Create tiny dummy png for both light and dark if they don't exist
    fs.writeFileSync(srcPath, dummyBuffer);
    fs.writeFileSync(destPath, dummyBuffer);
    console.log(`Created dummy placeholders for ${name} and ${darkName}`);
  }
});

console.log('Dummy image generation complete!');
