// - Question 1
//     - Given an array, find all the even elements of the array
//         - Sample Input → arr = [1 2 3 4 5]
//         - Sample Output → [2,4]
//     - Expected Time Complexity → O(N)
//     - Expected Space Complexity → O(N)
//     - Follow up questions
//         - Define the array data structure?
//             - It is a linear data structure, which organises data in a contiguous fashion in the memory
//         - What is the time complexity to get an element from an array, if the index is known already?
//             - O(1)

function findEven(arr) {
    let ans = []
    for(let x of arr) {
        if(x % 2 === 0) {
            ans.push(x)
        }
    }
    return ans;
}

console.log(findEven([1, 2, 3, 4, 5]));


