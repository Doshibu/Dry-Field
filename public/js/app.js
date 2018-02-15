(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;require.register("dns", function(exports, require, module) {
  module.exports = {};
});
require.register("net", function(exports, require, module) {
  module.exports = {};
});
require.register("tls", function(exports, require, module) {
  module.exports = {};
});
require.register("fs", function(exports, require, module) {
  module.exports = {};
});
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("features/citern/controller.js", function(exports, require, module) {
'use strict';

var citernElements = $('#main-citern, .field-citern');
citernElements.each(function (v, i) {
  $(undefined).click(function (e) {
    console.log('Wallet clicked');
  });
});

module.exports = {
  // fillCitern: (id, nbLitre) => {
  //     return new Promise((resolve, reject) => {
  //       console.log('fill citern')
  //        CiternModel.findByIdAndUpdate(id, nbLitre, (err, result) => {
  //            if (err) {
  //                reject(err)
  //            }
  //            resolve(result)
  //        })
  //     })
  // },
  // stateCitern: (id) => {
  //     console.log('check citern')
  //     CiternModel.find({'_id': id})
  // }
};
});

;require.register("features/citern/model.js", function(exports, require, module) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// imports
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// model
// let citernSchema = new mongoose.Schema({
//    capactiy: {type: Number, min: 0, max: 100, required: true},
//    consumtion: {type: Number, min: 1, max: 2, required: true}, // per second
//    fieldNumber: {type: Number, min: 0, max: 3, required: true} // 0 for host
// })

// const Citern = mongoose.model('citern', citernSchema)

var Citern = function Citern(isGlobal, consumtion, id) {
  _classCallCheck(this, Citern);

  this.consumtion = consumtion;
  this.id = id;
  this.isGlobal = isGlobal;
};

module.exports = {
  Citern: Citern };
});

;require.register("features/field/controller.js", function(exports, require, module) {
"use strict";
});

;require.register("features/field/model.js", function(exports, require, module) {
'use strict';

// imports
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// model
var fieldSchema = new mongoose.Schema({
    percentage: { type: Number }, // 100 : field is ready
    hasWater: { type: Boolean },
    consumtion: { type: Number // litre per second
    } });

var Filed = mongoose.model('field', fieldSchema);

module.exports = {
    Filed: Filed
};
});

;require.register("features/score/controller.js", function(exports, require, module) {
"use strict";
});

;require.register("features/score/model.js", function(exports, require, module) {
"use strict";
});

;require.register("features/wallet/controller.js", function(exports, require, module) {
'use strict';

// import { querySelectors } from '../../querySelectors'

var walletElement = $('#wallet');
walletElement.click(function (e) {
  console.log('Wallet clicked');
});

var el = document.getElementById('wallet');
el.addEventListener('click', function () {
  console.log('ok');
}, false);
});

;require.register("features/wallet/model.js", function(exports, require, module) {
"use strict";
});

;require.register("querySelectors.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// module.exports = {
//   wallet: '#wallet',
//   mainCitern: '#main-citern',
//   fieldCitern: '.field-citern',
//   score: '#score',
//   fields: '.field'
// }

var querySelectors = exports.querySelectors = {
  wallet: '#wallet',
  mainCitern: '#main-citern',
  fieldCitern: '.field-citern',
  score: '#score',
  fields: '.field'
};
});

;require.register("views/citern.html", function(exports, require, module) {

});

;require.register("views/field.html", function(exports, require, module) {

});

;require.register("views/score.html", function(exports, require, module) {

});

;require.register("views/wallet.html", function(exports, require, module) {

});

;require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map