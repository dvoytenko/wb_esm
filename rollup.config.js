import path from 'path';

const config = {
  input: {
    'app1': 'src/app1/index.js',
  },
  output: {
    dir: './build/rollup',
    format: 'es',
    sourcemap: false,
  },
  watch: {
    exclude: './build',
    clearScreen: true,
  },
  plugins: [
  ],
};

export default config;
