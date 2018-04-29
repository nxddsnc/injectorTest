const path = require('path');
var rootDir = path.resolve(__dirname, 'dist');
class DtsBundlePlugin {
  apply(compiler) {
    compiler.plugin('done', function () {
      var dts = require('dts-bundle');
    });
  }
}


module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'injector-test.js',
    path: rootDir,
    libraryTarget: "commonjs",
  },
  node: {
    fs: 'empty'
  },
  mode: 'development',
  plugins: [
    new DtsBundlePlugin()
  ]
};
