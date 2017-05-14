class FieldsListController {
  /** @ngInject */
  constructor(FieldsService, AppConstants) {
    this._FieldsService = FieldsService;

    this.allLoaded = false;
    this.isLoading = false;
    this.fields = [];
    this.fieldTypes = AppConstants.fieldTypes;
  }

  $onInit() {
    this.isLoading = true;
    this._FieldsService.getFields()
      .then(res => {
        this.isLoading = false;
        this.fields = res.data.results;
        this._checkLoaded(res.data.count);
      });
  }

  filterFields() {
    this.allLoaded = false;
    this.isLoading = true;
    this._FieldsService.getFields(this.filterFieldType)
      .then(res => {
        this.isLoading = false;
        this.fields = res.data.results;
        this._checkLoaded(res.data.count);
      });
  }

  loadMore() {
    if (this.allLoaded || this.isLoading) {
      return;
    }

    this.isLoading = true;
    this._FieldsService.getFields(this.filterFieldType, this.fields.length)
      .then(res => {
        this.isLoading = false;
        this.fields = this.fields.concat(res.data.results);
        this._checkLoaded(res.data.count);
      })
      .catch(err => {
        this.error = err.data.errors.message;
      });
  }

  _checkLoaded(count) {
    if (count === this.fields.length) {
      this.allLoaded = true;
    }
  }
}

const FieldsList = {
  controller: FieldsListController,
  templateUrl: 'components/fields-list.html'
};

export default FieldsList;
