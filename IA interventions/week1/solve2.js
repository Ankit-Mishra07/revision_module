// - Question 2
//     - Given an array, reverse the even elements of the array
//         - Sample Input → arr = [1 2 3 4 5]
//         - Sample Output → [1 4 3 2 5]
//     - Expected Time Complexity → O(N)
//     - Expected Space Complexity → O(N)
//     - Edge cases
//         - The array has no even elements
//         - All the elements in the array are even
//     - Follow up question
//         - Ask the candidate to solve it without using extra space

function reverseEven(arr) {
    let left = 0
    let right = arr.length-1;
    while(left < right) {
        if(arr[left]%2===0  && arr[right]%2!==0){
            right--;
        }else if(arr[left]%2!==0  && arr[right]%2===0) {
            left++;
        }else if(arr[left]%2===0  && arr[right]%2===0) {
            let temp = arr[left]
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }else {
            left++;
            right--;
        }
    }

    return arr;
}

console.log(reverseEven([1,2,3,4,5,6, 7, 8]));


