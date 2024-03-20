const { Types } = require('mongoose');

function updateProductValidation(id, data) {
  if (
    !data ||
    (!data.hasOwnProperty('title') && !data.hasOwnProperty('description'))
  ) {
    throw new Error('data is required Check if its provided');
  }

  if (data.description === '') {
    throw new Error('Description cant be empty');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('id is required. Check if it is provided and try again');
  }
}

module.exports = { updateProductValidation };
