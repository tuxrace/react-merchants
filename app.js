const express = require('express')
const app = express()
const router = express.Router()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const mockData = require('./mockData')

router.route('/')
router.get('*', function(req, res){
  res.sendFile(`${__dirname}/public/index.html`)
})

app.use(webpackDevMiddleware(webpack(webpackConfig),{
  publicPath:'/'
}))

const apiRoute = express.Router()
apiRoute.route('/merchants')
apiRoute.get('/merchants', function(req, res){
  res.json(mockData)
})

app.use('/api', apiRoute)
app.use('/', router)

module.exports = app 
