const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@api': 'src/api',
    '@components': 'src/components',
    '@data': 'src/data',
    '@functions': 'src/functions',
    '@pages': 'src/pages',
  })(config);

  return config;
};
