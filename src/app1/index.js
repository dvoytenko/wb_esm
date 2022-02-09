
import m1 from './m1.js';
import m2 from './m2.js';

const props = {a: 'Jim'};

root.style.whiteSpace = 'pre';

root.textContent = `
  ${m1(props)}
  ${m2(props)}
`;
