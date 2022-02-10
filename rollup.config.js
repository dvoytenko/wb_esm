
const config = {
  input: {
    'app1': 'src/app1/index.js',
    'app2': 'src/app2/index.js',
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
