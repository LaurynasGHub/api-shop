function setAllProductsValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error('Title is required, please check if provided');
  }

  if (!props?.description?.trim()) {
    throw new Error('Description is required, please check if provided');
  }
}

module.exports = { setAllProductsValidation };
