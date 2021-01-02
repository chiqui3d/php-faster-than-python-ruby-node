function fibonacci(n){
    if (n < 2){
       return 1;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
}
const start = (Date.now() % 1000) / 1000;
fibonacci(22);
const end = (Date.now() % 1000) / 1000;
console.log(end - start);