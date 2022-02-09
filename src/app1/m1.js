
import m1_1 from './m1_1.js';

export default function render(props) {
  return `
    m1: ${props.a} (${m1_1(props)})
  `;
}
