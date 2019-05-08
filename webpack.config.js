const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }]
  },
  plugins: [new CopyPlugin([{ from: 'src/client/index.html' }])],
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
}
