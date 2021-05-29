exports.reverseText = function(text) {
    let splitText = text.split("")
    let reverseTextArray = splitText.reverse()
    let reverseText = reverseTextArray.join("")
    return reverseText
}