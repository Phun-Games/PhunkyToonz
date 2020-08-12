const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.jsx',
  // entry: 'client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    // path: 'build',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './client',
    proxy: {
      '/api': 'http://localhost:3000/',
      '/spotifyAuth': 'http://localhost:3000/',
    },
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
