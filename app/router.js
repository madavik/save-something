import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rainharvest');
  this.route('whySaveSomething', { path: '/why-save-something'});
});

export default Router;
