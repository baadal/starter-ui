const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = (env) => {
  const outDir = env.ESM ? 'dist/esm' : 'dist/cjs';
  const libraryType = env.ESM ? 'module' : 'commonjs2';
  const experiments = env.ESM ? { outputModule: true } : {};

  const plugins = [
    new webpack.EnvironmentPlugin({
      npm_package_version: '',
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    }),
    new MiniCssExtractPlugin({
      filename: `../styles/index.css`,
    }),
  ];

  if (env.ESM) {
    const banner = `
      import { createRequire } from 'module';
      let require = createRequire(import.meta.url);
    `;

    plugins.push(
      new webpack.BannerPlugin({
        banner,
        raw: true,
        entryOnly: true,
      })
    );

    plugins.push(new IgnoreEmitPlugin(/\.css$/));
  }

  const stats = {
    // timings: false,
    hash: false,
    version: false,
    builtAt: false,
    assets: false,
    entrypoints: false,
    modules: false,
    chunks: false,
    children: false
  };

  return {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
      'index': './src/index.ts',
    },
    experiments,
    output: {
      filename: '[name].js',
      path: path.resolve(process.cwd(), outDir),
      library: {
        type: libraryType,
      },
    },
    target: 'node14', // node version is mentioned to declare support for ESM
    externals: [nodeExternals()], // ignore all modules in node_modules folder
    externalsPresets: {
      // Ref: https://stackoverflow.com/a/35820388
      node: true, // Target node environment (ignore built-in modules like path, fs, etc.)
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ]
        },
      ],
    },
    devtool: 'source-map',
    plugins,
    stats,
  };
};
