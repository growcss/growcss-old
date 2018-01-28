/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import flow from 'rollup-plugin-flow';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';
import sourceMaps from 'rollup-plugin-sourcemaps';
import globals from 'rollup-plugin-node-globals';
import 'babel-polyfill';

const pkg = require(`${__dirname}/package.json`);

export const commonPlugins = [
  flow({
    // needed for sourcemaps to be properly generated
    pretty: true,
  }),
  json(),
  globals(),
  nodeResolve(),
  sourceMaps(),
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['env', { modules: false }], 'flow', 'react-app'],
    plugins: ['external-helpers', 'babel-plugin-styled-components', 'polished'],
  }),
  commonjs({
    include: ['node_modules/react/**', 'node_modules/react-dom/**'],
  }),
];

export const configBase = {
  input: 'src/index.js',
  external: ['react', 'styled-components'].concat(
    Object.keys(pkg.dependencies),
  ),
  plugins: commonPlugins,
};

export const umdConfig = Object.assign({}, configBase, {
  output: {
    file: pkg.browser,
    format: 'umd',
    name: pkg.moduleName,
    exports: 'named',
    sourcemap: true,
    globals: {},
  },
  plugins: configBase.plugins.concat(
    uglify({
      sourceMap: true,
    }),
    visualizer({ filename: './bundle-stats.html' }),
  ),
});

export const browserConfig = Object.assign({}, configBase, {
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
});
