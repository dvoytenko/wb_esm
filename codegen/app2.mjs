
import fs from 'fs';

// const N = 2;
// const M = 3;
// const K = 10;
// const L = 2;

const N = 20;
const M = 20;
const K = 100;
const L = 15;

const seq = (length) => Array.from({length}).map((_, i) => i + 1);

const randomString = () => seq(K).map(() =>
  String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 26))).join('');

seq(N).forEach((i) => {
  seq(M).forEach((j) => {
    fs.writeFileSync(`./src/app2/m_${i}_${j}.js`, `
      import {compute} from './shared.js';

      export default function render(props) {
        return [
          ${seq(L).map((l) =>
            `compute('m_${i}_${j}/${l}: $\{c} ${randomString()}', props)`).join(',\n')}
        ].join('\\n');
      }
    `);
  });

  fs.writeFileSync(`./src/app2/m_${i}.js`, `
    ${seq(M).map((j) =>
      `import m_${i}_${j} from './m_${i}_${j}.js';`).join('\n')}

    export default function render(props) {
      return [
        ${seq(M).map((j) =>
          `m_${i}_${j}(props)`).join(',\n')}
      ].join('\\n');
    }
  `);
});

  // ${seq(N).map((i) =>
  //   `console.log('${i}', m_${i}(props));`).join('\n')}

fs.writeFileSync(`./src/app2/index.js`, `
  ${seq(N).map((i) =>
    `import m_${i} from './m_${i}.js';`).join('\n')}

  performance.mark('start_script');

  const props = {c: '[[C]]'};

  const all = [
    ${seq(N).map((i) => `m_${i}(props)`).join(',')}
  ].join('\\n\\n');

  root.textContent = 'Total length: ' + all.length;
  // console.log(all.length);
  // console.log(all);

  performance.mark('end_script');
`);

fs.writeFileSync(`./pages/app2/bundle.html`, `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>app2: bundle</title>
</head>
<body>
  <div id="root"></div>
  <script>performance.mark('before_script')</script>
  <script type="webbundle">${JSON.stringify({
      source: 'http://localhost:8080/build/wbn2/app2.wbn',
      resources: [
        'http://localhost:8080/build/wbn2/app2.wbn/index.js',
        'http://localhost:8080/build/wbn2/app2.wbn/shared.js',
        ...(seq(N).map((i) => ([
          `http://localhost:8080/build/wbn2/app2.wbn/m_${i}.js`,
          ...(
            seq(M).map((j) =>
              `http://localhost:8080/build/wbn2/app2.wbn/m_${i}_${j}.js`)
          ),
        ])).flat()),
      ],
    }, undefined, 2)}
  </script>
  <script type="module" src="http://localhost:8080/build/wbn2/app2.wbn/index.js"></script>
</body>
</html>
`);
