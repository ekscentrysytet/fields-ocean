const router = require('express').Router();
const mongoose = require('mongoose');
const Field = mongoose.model('Field');

router
  .get('/', (req, res, next) => {
    const limit =  parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    let query = {};

    if (typeof req.query.type !== 'undefined') {
      query.type = req.query.type;
    }

    return Promise.all([Field.find(query)
      .limit(limit)
      .skip(offset)
      .sort({createdAt: 'desc'})
      .exec(),
      Field.count(query).exec()
    ]).then(result => {
      const [fields, fieldsCount] = result;

      return res.json({
        count: fieldsCount,
        results: fields
      })
    }).catch(next)
  })
  // for dev purposes
  .post('/', (req, res, next) => {
    const field = new Field(req.body);

    return field.save()
      .then(() => {
        return res.json({field});
      })
      .catch(next);
  })

  .put('/:fieldId', (req, res, next) => {
    return Field.findOneAndUpdate({id: req.params.fieldId}, req.body)
      .then(result => {
        if (!result)
          return res.status(404).json({
            errors: {
              message: `Field with id ${req.params.fieldId} doesn't exists`
            }
          });

        return res.json(result);
      })
      .catch(next);
  });

module.exports = router;