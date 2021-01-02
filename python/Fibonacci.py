import time

def Fibonacci(n):
    if n<2:
        return 1
    return Fibonacci(n-1)+Fibonacci(n-2)

start = time.time()
Fibonacci(22)
print(time.time() - start)
