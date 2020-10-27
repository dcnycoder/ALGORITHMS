//There are three types of edits that can be performed on
// strings: insert a character, remove a character, 
//or replace a character. Given two strings, write a 
//function to check if they are one edit (or zero edits) 
//away

//EXAMPLES: 
//pale, ple => true
//pales, pale => true
//pale, bale => true
//pale, bake => false


//SOLUTION APPROACH: 
//1) Count the number of distinct letters in each string
//2) If the counts differ by no more than 1 in total across all letters, return true
//3) Else return false
oneAway = function(str1, str2) {
    let letterCount1 = {}
    let letterCount2 = {}

    for (let letter in str1) {
        if (!(letter in letterCount1)) {
            letterCount1[letter] = 1
        }
        else letterCount1[letter] += 1
    }
    for (let letter in str2) {
        if (!(letter in letterCount2)) {
            letterCount2[letter] = 1
        }
        else letterCount2[letter] += 1
    }

}
