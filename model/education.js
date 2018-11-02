module.exports = {
    name: 'educations',
    fields: [
      {
        name: 'address',
        type: 'String',
        length: 256,
        not_null: true,
        index: true
      },
      {
        name: 'name',
        type: 'String',
        length: 30
      },
      {
        name: 'senderId',
        type: 'String',
        length: 50,
        not_null: true,
      },
      {
        name: 'physics',
        type: 'Number',
        default: 0,
        index: true
      },
      {
        name: 'chemistry',
        type: 'Number',
        default: 0,
        index: true
      },
      {
        name: 'math',
        type: 'Number',
        default: 0,
        index: true
      },
      {
        name: 'total',
        type: 'Number',
        default: 0,
        index: true
      }
    ]
  }