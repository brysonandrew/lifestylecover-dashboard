export function removeInArray(arr, val) {
  const index = arr.indexOf(val)
  if (index > -1) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
  } else {
    return arr
  }
}

export function sortCharBy(prop, a, b) {
  if (a[prop] < b[prop]) {
    return -1
  }
  if (a[prop] > b[prop]) {
    return 1
  }
  return 0
}

export function sortChar(a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}
