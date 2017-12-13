module.exports = {
  entry:'./src/index.js',
  output:{path: __dirname, filename:'bundle.js'},
  module:{
    rules: [
      { test: /.js/, loader:'babel-loader' },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}