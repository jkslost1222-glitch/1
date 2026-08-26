import https from 'https';
import fs from 'fs';

https.get('https://adeus-otite.vercel.app/assets/index-DgTv0SME.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('extracted_bundle.js', data);
    console.log('Saved bundle size:', data.length);
  });
});
