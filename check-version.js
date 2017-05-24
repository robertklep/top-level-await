const semver   = require('semver');
const engines  = require('./package.json').engines;
const required = engines.node;

if (! semver.satisfies(process.version, required)) {
  console.log('\n*** Need at least Node.js version %s ***\n\n', required);
  process.exit(1);
}
