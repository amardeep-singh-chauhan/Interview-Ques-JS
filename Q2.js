// Question2 : Check if a String is a Palindrome

const word = "racecar";

function checkPalindrome(word) {
    let revWord = ''
    let mapWord = word.split('')
    for(let i = word.length -1 ; i >= 0; i--){
        revWord = revWord + mapWord[i]
    }
    
    return revWord === word
}

console.log(checkPalindrome(word))