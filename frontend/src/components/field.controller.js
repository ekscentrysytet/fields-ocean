class FieldController {
  /** @ngInject */
  constructor(FieldsService) {
    this.isEditing = false;
    this._FieldsService = FieldsService;
  }

  $onInit() {
    if (!this._isSelectTypeField()) {
      this.initialValue = this.field.value.substring(0);
    }

    if (this._isSelectTypeField()) {
      this.initialChoices = this.field.choices.slice();
      this.initialSize = Number(this.field.size);
    }
  }

  edit() {
    this.isEditing = true;
  }

  saveField(id) {
    this._FieldsService.updateField(id, this.field)
      .then(() => {
        this.isEditing = false;

        this._setInitials();
      })
      .catch(err => {
        this.error = err.data.errors.message;
      });
  }

  cancelChanges() {
    this._resetToInitial();

    this.isEditing = false;
  }

  addChoice() {
    this.field.choices.push('');
  }

  removeChoice(choice) {
    this.field.choices = this.field.choices.filter(option => option !== choice);
  }

  _isSelectTypeField() {
    return this.field.type === 'select';
  }

  _setInitials() {
    if (!this._isSelectTypeField()) {
      this.initialValue = this.field.value;
    }

    if (this._isSelectTypeField()) {
      this.initialChoices = this.field.choices;
      this.initialSize = Number(this.field.size);
    }
  }

  _resetToInitial() {
    if (!this._isSelectTypeField()) {
      this.field.value = this.initialValue;
    }

    if (this._isSelectTypeField()) {
      this.field.choices = this.initialChoices.slice();
      this.field.size = Number(this.initialSize);
    }
  }
}

const Field = {
  controller: FieldController,
  bindings: {
    field: '<'
  },
  templateUrl: 'components/field.html'
};

export default Field;
