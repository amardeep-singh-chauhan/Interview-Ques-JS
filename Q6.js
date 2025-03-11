// Question 6: Reverse Words in a Sentence

let str = "my name is amardeep singh"

function reverseWordsInSentence(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(reverseWordsInSentence(str))