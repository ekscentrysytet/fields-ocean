import angular from 'angular';
import HomeConfig from './home.config';
import HomeController from './home.controller';

export default angular
  .module('app.home', [])
  .config(HomeConfig)
  .controller('HomeController', HomeController);
