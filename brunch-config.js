exports.paths = {
  public: 'public',
  watched: ['public/js/features']
}
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^public\/js\/features/
    }
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
