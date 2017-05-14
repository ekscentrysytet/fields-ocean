import angular from 'angular';
import 'angular-ui-router';

import appConfig from './config/app.config';
import appConstants from './config/app.constants';

import './index.scss';

import './layout';
import './home';
import './components';
import './directives';
import './services';

export const app = 'app';

const appModules = [
  'ui.router',
  'app.layout',
  'app.home',
  'app.components',
  'app.directives',
  'app.services'
];

angular
  .module(app, appModules)
  .constant('AppConstants', appConstants)
  .config(appConfig);
