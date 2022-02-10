
const RE = /\$\{[^{}]+\}/g;

export function compute(s, props) {
  return s.replace(RE, (m) => props[m.substring(2, m.length - 1)]
  );
}
