//fibonacci sequence is 1,1,2,3,5 etc
//write a function that would return an n-th fibonacci number

const number = 7;

// function fibonacciRecursive(num) {
//   if (num <= 2) return 1;
//   else elem = 2;
//   num
//   helperFunc(elem) {
//     while(elem<num) {
//       elem =
//     }

//   }

// }



function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}


console.log(fib(number));
