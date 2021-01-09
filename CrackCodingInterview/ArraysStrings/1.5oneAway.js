//There are three types of edits that can be performed on
// strings: insert a character, remove a character, 
//or replace a character. Given two strings, write a 
//function to check if they are one edit (or zero edits) 
//away

//https://www.lintcode.com/problem/one-edit-distance/description

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

    //console.log([...str1])

    str1.split('').forEach(letter => {
        if (!(letter in letterCount1)) {
            letterCount1[letter] = 1
        }
        else letterCount1[letter] += 1
    })
        str2.split('').forEach(letter => {
            if (!(letter in letterCount2)) {
                letterCount2[letter] = 1
            }
            else letterCount2[letter] += 1
        })

    console.log(letterCount1)
    console.log(letterCount2)

    let difference = 0

    while (difference <= 1 && (Object.keys(letterCount1).length || Object.keys(letterCount2).length)) {
        let letter, counter1, counter2
        if (Object.keys(letterCount1).length) {
            letter = Object.keys(letterCount1).pop()
            counter1 = letterCount1[letter]
            delete letterCount1[letter]
            if (!(letter in letterCount2)) counter2 = 0
            else {
                counter2 = letterCount2[letter]
                delete letterCount2[letter]
            }
        }
        else {
            letter = Object.keys(letterCount2).pop()
            counter2 = letterCount2[letter]
            delete letterCount2[letter]
            counter1 = 0
        }

        difference += Math.abs(counter1 - counter2)
    }
    return difference
}

const str1 = 'let'
const str2 = 'bet'
console.log(oneAway(str1, str2))