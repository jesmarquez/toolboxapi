exports.reverseText = function (text) {
  const splitText = text.split('')
  const reverseTextArray = splitText.reverse()
  const reverseText = reverseTextArray.join('')
  return reverseText
}
