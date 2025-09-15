/**
 * Strings
 */
let longString = `Lorem ipsum test one two three`
let longString2 = `Lorem ipsum test one two three`
console.log(longString.at(-1))
console.log(longString.charAt(-1))

console.log(longString.concat(' added'))

for (let i = 0; i < longString.length; i++) {
    console.log(longString[i])
}

console.log(longString.localeCompare(longString2))
console.log(longString === longString2)
console.log(longString + 2)
console.log(longString.replaceAll("o", "e"))

/**
 * Palindromes, Anagrams, Isograms
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter one word: ', (word1) => {
    rl.question('Enter another word: ', (word2) => {
        console.log(`${word1} and ${word2} are palindromes: ${checkPalindromes(word1, word2)}`)
        console.log(`${word1} and ${word2} are anagrams: ${checkAnagrams(word1, word2)}`)
        console.log(`${word1} and ${word2} are isograms: ${checkIsograms(word1)}`)

        rl.close()
    })
})

const checkPalindromes = (word1, word2) => {
  return word1 === word2.split('').reverse().join('')
}

const checkAnagrams = (word1, word2) => {
    if (word1.length != word2.length) return false

    const word1Chars = word1.split('').sort().join('')
    const word2Chars = word2.split('').sort().join('')

    return word1Chars === word2Chars
}

const checkIsograms = (word1) => {
    let chars = word1.split('')

  // Check number of times first char appears
  let frequencies = {}
  for (const char of word1) {
    frequencies[char] =(frequencies[char] || 0) + 1
  }
  const freqs = Object.values(frequencies)
  let firstFrequency = freqs[0]

  return freqs.every(freq => freq == firstFrequency)
}