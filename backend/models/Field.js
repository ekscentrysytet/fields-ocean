const mongoose = require('mongoose');

const FieldSchema = new mongoose.Schema({
  id: { type: Number, default: Date.now },
  type: { type: String, required: true, enum: ['text', 'select', 'bool'] },
  size: Number,
  value: String,
  choices: [String],
  label: String
}, {timestamps: true});

FieldSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.__v;
    delete ret._id;
  }
});


mongoose.model('Field', FieldSchema);
