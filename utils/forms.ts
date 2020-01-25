export const changedValues = (initValues, currentValues) => {
  return Object.keys(currentValues).reduce((changed, key) => {
    if (initValues[key] !== currentValues[key]) {
      changed[key] = currentValues[key]
    }
    return changed
  }, {})
}

export const initializeFormValues = (initFormValues, compareValues) => {
  let values = {}
  Object.keys(initFormValues).forEach(key => {
    values[key] = compareValues[key] || initFormValues[key]
  })
  return values
}
