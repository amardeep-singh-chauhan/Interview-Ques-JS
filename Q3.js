// Question 3: 

// 1. Remove Duplicates from a Word

const word = 'racecar';

function removeDuplicates (word) {
    const filArr = []
    const wordArr = word.split('').map(w => {
        if(!filArr.includes(w)){
            filArr.push(w)
        }
    })
    return filArr.join('')
}

console.log(removeDuplicates(word));

// 2. Remove Duplicates from a String

let str = "remove heart from the heart during heart break so remove it"

function removeDuplicatesFromString (str){
    const filArr = []
    const wordArr = str.split(' ').map(word => {
        if(!filArr.includes(word)){
            filArr.push(word)
        }
    })
    return filArr.join(' ')
}

console.log(removeDuplicatesFromString(str))