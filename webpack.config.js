module.exports = {
  entry:'./src/index.js',
  output:{path: __dirname, filename:'bundle.js'},
  module:{
    rules: [
      { test: /.js/, loader:'babel-loader' },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
}