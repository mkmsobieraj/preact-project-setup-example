import path from 'path';
import { Configuration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    path: distDir,
    filename: '[name].js',
    assetModuleFilename: '[path][name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(svg|woff)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: { modules: true, import: true, importLoaders: 1 },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*.{.ts,tsx}',
      },
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
      filename: 'index.html',
      inject: 'body',
      favicon: './static/icons/card-checklist.svg',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: './dist',
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};

export default config;
