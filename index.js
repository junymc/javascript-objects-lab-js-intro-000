var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {prop2: 2})
}

function destructivelyUpdateWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
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
