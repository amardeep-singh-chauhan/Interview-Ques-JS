// Question 5: Count the Occurrences of Each Character

let str = 'aabbccd'

function countOcc (str) {
    let countObj = {};
    for(i=0;i<str.length;i++){
        if(Object.keys(countObj).includes(str[i])){
            countObj[str[i]]++
        }else{
            countObj[str[i]] = 1
        }
    }
    
    return countObj;
}

console.log(countOcc(str))


// Optimised Solution from AI

function countOccc(str) {
    let countObj = {};

    for (let char of str) {
        countObj[char] = (countObj[char] || 0) + 1;
    }
    
    return countObj;
}

console.log(countOccc('aabbccd'));
