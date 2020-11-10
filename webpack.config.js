const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development", // development-》不会乱码化 或者 production-》会乱码化
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
     }
   ]
 },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'webpack hello'
     })
   ],
}