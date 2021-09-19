const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    /*https: {
      cacert: './cert/csr.pem',
      key: './cert/private.key',
      cert: './cert/re-zero_online.crt',
      requestCert: true,
    },*/
    historyApiFallback: {
      index: "/view/index.html"
    },
    compress: true,
    port: '8080',
    allowedHosts: [
        're-zer0.com',
        '.amazonaws.com'
    ],
    client: {
      logging: 'info',
    },
    static: [
      {
        directory: path.join(__dirname, 'data'),
        publicPath: '/data',
      },
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/public',
      },
      {
        directory: path.join(__dirname, 'view'),
        publicPath: '/view',
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/src',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    clean: true,
    publicPath: "/"
  },
  // resolve: {
  //   extensions: ['.js'],
  // },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "targets": "> 0.25%, not dead",
                "useBuiltIns": "usage",
                "corejs": "3.8.3",
              }
            ]
          ]
        }
      }
    }]
  }
};
