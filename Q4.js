// Question 4: Find the First Non-Repeating Character

const str = "abaccdeff"

function findFirstNonRepeatingChar(str) {
    let strSplit = str.split('')
    let alpha = ''
    let count = 0
    
    for(let i = 0; i<strSplit.length;i++){
        for(let j= 0; j<strSplit.length;j++){
            if(strSplit[i] === strSplit[j]){
                count = count + 1
            }
        }
        if(count === 1){
            alpha = strSplit[i]
            break
        }
        count = 0
    }
    return alpha
}

console.log(findFirstNonRepeatingChar(str))


// Optimised Solution from AI

function findFirstNonRepeatingCharr(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        if (char in charCount) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found
    return "No non-repeating characters found";
}

console.log(findFirstNonRepeatingCharr(str));
