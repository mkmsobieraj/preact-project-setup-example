import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const distDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");

const config: Configuration = {
  entry: "./src/index.tsx",
  output: {
    path: distDir,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*.{.ts,tsx}",
      },
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
      filename: "index.html",
      inject: "body",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    static: "./dist",
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};

export default config;
