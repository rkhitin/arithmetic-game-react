const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          // [
          // { loader: "css-hot-loader" },
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          // {
          //   loader: "css-loader",
          //   options: {
          //     sourceMap: process.env.NODE_ENV !== "production"
          //   }
          // }
          // ],
          // MiniCssExtractPlugin.loader,
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 1234,
  },
};
