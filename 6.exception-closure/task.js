function parseCount (changeNumber) {
  let parse = Number.parseFloat(changeNumber)
  if (Number.isNaN(parse)) {
    throw new Error('Невалидное значение')
  }
  return parse
}

function validateCount (changeNumber) {
  let parse
  try {
    parse = parseCount(changeNumber)
    return parse
  } catch (error) {
    return error
  }
}
