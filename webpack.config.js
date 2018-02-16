const path = require('path');
const _public = path.join(__dirname, '/public');
const _client = path.join(__dirname, '/client');
const _modules = path.join(__dirname, '/node_modules');

module.exports = {
  context: _client,
  entry: `${_client}/index.jsx`,
  output: {
    path: _public,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)?/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  resolve: {
    modules: [
      _modules
    ]
  }
};