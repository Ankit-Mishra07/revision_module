// - Question 3
//     - Given a string, reverse the order of all the vowels in the string, without disturbing the order of other elements
//         - Sample Input → str = “ankush”
//         - Sample Output → = “unkash”
//     - Expected Time Complexity → O(N)
//     - Expected Space Complexity → O(N)
//     - Edge cases
//         - All the elements in the string are vowels
//         - The string has no vowels
//     - Follow up question
//         - What is a palindrome? Algorithm to find if the string is palindrome or not.
//         - What is an anagram? Algorithm to find if the string in an anagram or not.
function reverseVowel(str) {
    let left = 0
    let right = str.length-1;
    str = str.split("");
    while(left < right) {
        if((str[left].match(/[aeiou]/ig)!==null)  && (str[right].match(/[aeiou]/ig)===null)){
            right--;
        }else if((str[left].match(/[aeiou]/ig)===null)  && (str[right].match(/[aeiou]/ig)!==null)) {
            left++;
        }else if(str[left].match(/[aeiou]/ig)!==null  && str[right].match(/[aeiou]/ig)!==null) {
            let temp = str[left]
            str[left] = str[right];
            str[right] = temp;
            left++;
            right--;
        }else {
            left++;
            right--;
        }
    }

    return str.join("");
}

console.log(reverseVowel("ankush"));