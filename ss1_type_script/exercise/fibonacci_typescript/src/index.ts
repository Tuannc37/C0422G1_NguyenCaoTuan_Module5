let sumFibonacci: number = 0;
let myArray: number [] = [0];

function fibonacci(x:number): number {
    if (x == 1 || x == 2){
        return 1;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}

for (let i = 1; i < 20 ; i++) {
    myArray.push(fibonacci(i));
    sumFibonacci += fibonacci(i);
}

console.log("20 số Fibonacci đầu tiên là: " + myArray.toString());
console.log("Tổng số Fibonacci của dãy số là: " + sumFibonacci);
