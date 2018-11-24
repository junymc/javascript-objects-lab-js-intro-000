var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {prop2: 2})
}

function destructivelyUpdateWithKeyAndValue(object, key, value) {
  new object = object[key] = value
  return new object
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, object)
  delete copy[key]
  return copy
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
