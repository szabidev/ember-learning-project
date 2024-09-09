'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // ! Add options here, for example to include sass library
    sassOptions: {
      extension: 'scss',
    },
  });

  return app.toTree();
};
