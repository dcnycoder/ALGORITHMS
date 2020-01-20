//const array = ['{','[','(','{','[','[',']',']','}',')',']','}'];
const array = ['{','[','{','}',']','}'];
//const array = [];


function balancedBrackets (array) {
  const bracketList = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  //console.log(bracketList);
  if (array === []) return false;
  let stack = [];
  for (let i = 0; i<array.length; i++) {
    if (array[i] in bracketList) {
      stack.push(array[i]);
    }
    else if (array[i] === bracketList[stack[stack.length-1]]) {
      stack.pop();
    }
    else return false;
    }
    if (stack.length === 0) return true;
  }

console.log(balancedBrackets(array));
