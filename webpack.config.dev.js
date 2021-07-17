
import path from "path";

export default {
  mode: "development",
  devtool: "eval-source-map", // to debug our compiled code
  entry: "./src/index.js",
  output: { //In dev mode, No actual files are generated. Files are served from directory memory
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, // this means we can import css just like we do JS. Webpack will bundle our css
    ],
  },
};

