var resolve = require('path').resolve;
var webpack = require('webpack');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var defineEntryPoint = function(name) {
  return [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    name
  ]
}

module.exports = {
  target: 'web',

  entry: {
    index: defineEntryPoint('./app/index.js'),
    home: defineEntryPoint('./app/home.js')
  },

  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ],
      }
    ]
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // Provide a common chunk for the entrypoints
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js'
    }),

    // When uncommented produces a treegraph of Webpack dependencies.
    // new BundleAnalyzerPlugin(),

  ],

  resolve: {
    extensions: ['.js', '.jsx']
  }
}
