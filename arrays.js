console.log('Arrays')

const indexAndPrint = (arr, index) => {
    console.log(arr[index])
}

const myArray = [1, 2, 8, 'bee', 'last', 'first']

indexAndPrint(myArray, 2);

const isItGreg = (arr) => {
    const doesIncludeGreg = arr.includes('Greg')
    if (doesIncludeGreg) {
        return('Greg found');
    } else {
        return('Greg not found');
    }
}

console.log(isItGreg(['a', 'b', 'Greg']));
console.log(isItGreg(['a', 'b', 'c']));

const isItAPalindrome = (str) => {
    const arrayFromString = str.split('')
    const reversedArray = arrayFromString.reverse()
    const opposite = reversedArray.join('')
    
    if (str === opposite) {
        return true
    } else {
        return false
    }
}

console.log(isItAPalindrome('cat'));
console.log(isItAPalindrome('racecar'));
console.log (isItAPalindrome('mom'));
console.log (isItAPalindrome('bear'));