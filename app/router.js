import EmberRouter from '@ember/routing/router';
import config from 'ember-tutorial-e-commerce/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Override pathname, so that it will be /item/:item_id
  this.route('item', { path: '/item/:item_id' });
  this.route('cart', { path: 'shopping-cart' });
  // Override not-found pathname, to include all non-matching routes
  this.route('not-found', { path: '/*path' });
});
