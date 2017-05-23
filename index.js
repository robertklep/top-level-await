const Module = require('module').Module;
const wrap   = Module.wrap;

Module.wrap = function() {
  return wrap.apply(Module, arguments).replace(/^\(function/, '(async function');
}
