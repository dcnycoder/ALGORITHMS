//From common-sense guide to algorithms, p.198

//"Triangular numbers" is a sequence that begins as 1,3,6,10,15,21 and continues onward with the Nth 
//number in the pattern, which is N plus the previous number. 

function triangularNumbers(num) {
  if (num === 1) return 1
  else return num+triangularNumbers(num-1)
}

