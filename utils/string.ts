export function toKebabCase(name) {
  if (name) {
    return name
      .replace(/-/g, "")
      .replace(/\s/g, "-")
      .replace(/[.,]/g, "")
      .toLowerCase()
  } else {
    return ""
  }
}

export function fromKebabCase(name) {
  if (name) {
    let arr = name.split("-")
    return arr
      .map(word => word[0].toUpperCase() + word.substring(1, word.length))
      .join(" ")
  } else {
    return ""
  }
}

export const fromCamelCase = (camelCase) => {
  if (camelCase) {
    return camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
  } else {
    return ""
  }
};

export function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ")
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  return splitStr.join(" ")
}
