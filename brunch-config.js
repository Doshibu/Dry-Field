exports.paths = {
  public: 'public',
  watched: ['public/js/features']
}
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^public\/js\/features/
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': /^public\/css/
    }
  }
}

exports.plugins = {
  babel: {
    presets: ['env'],
    plugins: ['transform-object-rest-spread'],
    ignore: [
      /^node_modules/
    ]
  },
  uglify: {
    mangle: true,
    compress: {
      global_defs: {
        DEBUG: false
      }
    }
  },
  imageoptimizer: {
    smushit: true,
    path: 'assets'
  },
  less: {
    dumpLineNumbers: 'comments'
  }
}

exports.npm = {
  compilers: ['babel-brunch']
}
