const _ = require('lodash'),
  baseConfig = require('./base.conf');

exports.config = _.merge(baseConfig.config, {
  baseUrl: 'https://www.carnext.com',
  specs: [
    './features/NL/navigation.feature',
  ],
  capabilities: [{
    maxInstances: 1,
  }],
  reporters: [],
  reporterOptions: {
  },
});
