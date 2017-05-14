import angular from 'angular';

import FieldsService from './fields.service';

export default angular
  .module('app.services', [])
  .service('FieldsService', FieldsService);
