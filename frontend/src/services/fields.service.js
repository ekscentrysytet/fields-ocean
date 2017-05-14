export default class FieldsService {
  /** @ngInject */
  constructor($http, AppConstants) {
    this._$http = $http;
    this._AppConstants = AppConstants;
    this.fieldsUrl = `${this._AppConstants.apiUrl}/fields`;
  }

  getFields(type, offset = 0, limit = 10) {
    return this._$http({
      url: this.fieldsUrl,
      method: 'GET',
      params: {type, limit, offset}
    });
  }

  updateField(fieldId, field) {
    return this._$http
      .put(`${this.fieldsUrl}/${fieldId}`, field);
  }
}
