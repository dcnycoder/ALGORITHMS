const string = 'Hello';

function reverse(string) {
  if (string.length === 0) return '';

  return reverse(string.slice(1)) + string.slice(0, 1);
}

console.log(`Reversed string: ${reverse(string)}`);

