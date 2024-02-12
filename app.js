const input = document.querySelector("#text-input");
const result = document.querySelector("#result");
const button = document.querySelector("#check-btn");
//let filterInput;
function checkPalindrome() {
    const string = input.value.toLowerCase().replace(/[^A-Za-z0-9]/gi, '');
    const reverseString = string.split('').reverse().join('');
    result.style.display = "block";

    if(string === "") {
        alert("Please input a value");
        return result.innerHTML = "";
    }
    if (string === reverseString) {
        result.innerHTML = `<strong>${input.value}</strong> is a Palindrome`;
    } else {
        return result.innerHTML = `<strong>${input.value}</strong> is not a Palindrome`;
    }
}
button.addEventListener("click", checkPalindrome);
