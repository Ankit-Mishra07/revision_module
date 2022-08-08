// - Given the following pseudo code, what will be the output of the program? Identify the bug in the program (if present),  and fix it
function checkPalindrome(str){
		let left = 0;
		let right = str.length - 1
		while(left < right){
				if (str[left] != str[right]){
						return false;
				}
				// left++;
				// right--
		}
		return true
}
console.log(checkPalindrome("naman"))
