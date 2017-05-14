class FieldController {
  /** @ngInject */
  constructor(FieldsService) {
    this.isEditing = false;
    this._FieldsService = FieldsService;
  }

  $onInit() {
    if (!this.isSelectTypeField()) {
      this.initialValue = this.field.value.substring(0);
    }

    if (this.isSelectTypeField()) {
      this.initialChoices = this.field.choices.slice();
    }
  }

  edit() {
    this.isEditing = true;
  }

  saveField(id) {
    this._FieldsService.updateField(id, this.field)
      .then(() => {
        this.isEditing = false;

        if (!this.isSelectTypeField()) {
          this.initialValue = this.field.value;
        }

        if (this.isSelectTypeField()) {
          this.initialChoices = this.field.choices;
        }
      })
      .catch(err => {
        this.error = err.data.errors.message;
      });
  }

  cancelChanges() {
    if (!this.isSelectTypeField()) {
      this.field.value = this.initialValue;
    }

    if (this.isSelectTypeField()) {
      this.field.choices = this.initialChoices;
    }

    this.isEditing = false;
  }

  addChoice() {
    this.field.choices.push('');
  }

  removeChoice(choice) {
    this.field.choices = this.field.choices.filter(option => option !== choice);
  }

  isSelectTypeField() {
    return this.field.type === 'select';
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
