function render$2(props) {
  return `
    m1_1: ${props.a}
  `;
}

function render$1(props) {
  return `
    m1: ${props.a} (${render$2(props)})
  `;
}

function render(props) {
  return `
    m2: ${props.a}
  `;
}

const props = {a: 'Jim'};

root.style.whiteSpace = 'pre';

root.textContent = `
  ${render$1(props)}
  ${render(props)}
`;
