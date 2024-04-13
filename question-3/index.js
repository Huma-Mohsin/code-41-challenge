"use strict";
// //Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.
function ToFindFirstVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) { // Iterate over each character of the string using a for loop.
        const char = str[i].toLowerCase(); //Each character of string is convert it to lowercase to ensure a case-insensitive comparison.
        if (vowels.indexOf(char) !== -1) { // Check if the character is a vowel, use the indexOf method to check if the character exists in the vowels array.
            console.log(`First vowel "${char}" found in the given string "${str}"`);
            return;
        }
    }
    console.log(`No vowels found in the given string "${str}"`);
}
ToFindFirstVowel("HUMA");
ToFindFirstVowel("bOOk");
ToFindFirstVowel("sky");
//Author-Huma Mohsin
