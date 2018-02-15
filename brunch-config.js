exports.paths = {
  public: 'public',
  watched: ['app']
}
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: 'css/app.css'
  }
}

exports.plugins = {
  keyword: {
    filePattern: /\.(js|css|html|json)$/,
    extraFiles: []
  },
  babel: {
    presets: ['env'],
    plugins: ['transform-object-rest-spread'],
    ignore: [
      /^node_modules/
    ]
  }
}

exports.npm = {
  compilers: ['babel-brunch']
}
