import { isArray } from 'util';
export const changedValues = (initValues, currentValues) => {
  return Object.keys(currentValues).reduce((changed, key) => {
    if (initValues[key] !== currentValues[key]) {
      changed[key] = currentValues[key]
    }
    return changed
  }, {})
}

export const dataToForm = (data: any) => {
  return Object.keys(data).reduce((a,c,i) => {
    let nextProperty
    if (typeof data[c] === 'object' && data[c] !== null) {
      nextProperty = data[c]
    } else {
      nextProperty = {[c]: data[c]}
    }
    return {...a, ...nextProperty}
  }, {})
}

export const initializeFormValues = (compareValues, initFormValues, initArrayValues?) => {
  let values = {}
  Object.keys(initFormValues).forEach(key => {
    if (key !== '__typename') {
      const fromDb = dataToForm(compareValues)[key]
      if (isArray(fromDb) && initArrayValues) {
        values[key] = fromDb.length > 0
          ? fromDb.map((values) => initializeFormValues(values, initArrayValues))
          : initFormValues[key]
      } else {
        values[key] = fromDb || initFormValues[key]
      }
    }
  })
  return values
}
