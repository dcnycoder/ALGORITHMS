function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false
  let counter1 = {}
  let counter2 = {}
  for (let i=0; i<str1.length; i++) {
    if (!(str1[i] in counter1)) counter1[str1[i]] = 1
    else counter1[str1[i]] += 1
    if (!(str2[i] in counter2)) counter2[str2[i]] = 1
    else counter2[str2[i]] += 1
  }
  for (let letter in counter1) {
    if (!(letter in counter2) || (counter2[letter] != counter1[letter])) return false
  }
  return true
}

str1 = 'abcd'
str2 = 'abce'
console.log(isAnagram(str1, str2))