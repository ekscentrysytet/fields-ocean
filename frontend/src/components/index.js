import angular from 'angular';

import FieldsList from './fields-list.component';
import Field from './field.controller';

export default angular
  .module('app.components', [])
  .component('appFieldsList', FieldsList)
  .component('appField', Field);
