
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export default {
  mode: "production",
  devtool: "source-map", // to debug our compiled code
  entry: {
    main:path.resolve(__dirname, "src/index"),
    vendor:path.resolve(__dirname, "src/vendor")
  },
  output: { //In dev mode, No actual files are generated. Files are served from directory memory
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js", // name comes from keys of entry property
  },
  plugins: [
    //Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename:"[name].[chunkhash].css" // css bursting
    }),
    new HtmlWebpackPlugin({
      template:"src/index.html",
      trackJSToken:"" //Insert your track js token
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }, // this means we can import css just like we do JS. Webpack will bundle our css
    ],
  },
};

