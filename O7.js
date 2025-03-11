// Question 7: Check if Two Strings are Anagrams

let str1 = "anagram"
let str2 = "managra"

function checkAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(checkAnagram(str1, str2))