export const changedValues = (initValues, currentValues) => {
  return Object.keys(currentValues).reduce((changed, key) => {
    if (initValues[key] !== currentValues[key]) {
      changed[key] = currentValues[key]
    }
    return changed
  }, {})
}
