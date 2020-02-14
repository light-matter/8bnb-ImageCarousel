const path = require('path')
const SRC_DIR = path.join(__dirname, 'client/src/index.jsx')
const DIST_DIR = path.join(__dirname,'public')

module.exports = {
  "entry": SRC_DIR,
  "output": {
      "path": DIST_DIR,
      "filename": "bundle.js"
  },
  "module": {
      "rules": [
          {
              "test": /\.(js|jsx)$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "babel-loader",
                  "options": {
                      "presets": [
                          "@babel/preset-env",
                          "@babel/react"
                      ]
                  }
              }
          },
          {
              "test": /\.css$/,
              "use": [
                  "style-loader",
                  "css-loader",
              ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
            ],
          },
      ]
  }
}